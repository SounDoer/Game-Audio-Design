<script setup lang="ts">

/**

 * SPLDiagram.vue — SPL scale layout (thin axis, short stems, optional cell overrides).

 */



interface SplColumnMedia {

  src?: string

  alt?: string

  caption?: string

  placeholder?: string

  dbSpl?: number

}



type CellKey =

  | 'topLeft'

  | 'topMidLeft'

  | 'topMidRight'

  | 'bottomLeft'

  | 'bottomMidLeft'

  | 'bottomMidRight'

  | 'bottomRight'



const DEFAULT_CELLS: Record<CellKey, SplColumnMedia> = {

  topLeft: {

    src: '/how-to-listen-sound/SPL_SoundRoom.png',

    alt: 'SPL meter in dry studio room',

    caption: '音频编辑室',

    /** ~2 dB 左偏：与 topMidLeft 拉开，避免缩略图叠在一起 */

    dbSpl: 28,

  },

  topMidLeft: {

    src: '/how-to-listen-sound/SPL_Parking.png',

    alt: 'SPL meter in indoor parking',

    caption: '室内停车场',

    dbSpl: 46,

  },

  topMidRight: {

    src: '/how-to-listen-sound/MixingStage.JPG',

    alt: 'Audio post-production mixing stage',

    caption: '音频后期制作校准\n~79–83 dB SPL',

    dbSpl: 81,

  },

  bottomLeft: {

    src: '/how-to-listen-sound/SPL_SoundRoom_Working.png',

    alt: 'SPL meter in sound room working',

    caption: '音频编辑室工作状态',

    dbSpl: 72,

  },

  bottomMidLeft: {

    src: '/how-to-listen-sound/SPL_Office.png',

    alt: 'SPL meter indoor parking second sample',

    caption: '办公室',

    dbSpl: 33,

  },

  bottomMidRight: {

    src: '/how-to-listen-sound/SPL_Parking_Beep.png',

    alt: 'SPL meter horn parking',

    caption: '停车场鸣笛',

    dbSpl: 96,

  },

  bottomRight: {

    src: '/how-to-listen-sound/SPL_Street.png',

    alt: 'SPL meter loud street scene',

    caption: '街道',

    dbSpl: 54,

  },

}



const props = defineProps<{

  topLeft?: SplColumnMedia

  topMidLeft?: SplColumnMedia

  topMidRight?: SplColumnMedia

  bottomLeft?: SplColumnMedia

  bottomMidLeft?: SplColumnMedia

  bottomMidRight?: SplColumnMedia

  bottomRight?: SplColumnMedia

}>()



function cell(key: CellKey): SplColumnMedia {

  const base = DEFAULT_CELLS[key]

  const raw = props[key]

  if (raw == null || typeof raw !== 'object')

    return { ...base }



  const dbSpl

    = typeof raw.dbSpl === 'number'

      ? raw.dbSpl

      : typeof base.dbSpl === 'number'

        ? base.dbSpl

        : 60



  return {

    ...base,

    ...raw,

    src: raw.src || base.src,

    alt: raw.alt ?? base.alt ?? '',

    caption: raw.caption ?? base.caption,

    placeholder: raw.placeholder ?? base.placeholder,

    dbSpl,

  }

}



function clampAxisDb(n: number) {

  return Math.min(120, Math.max(0, n))

}



/** Horizontal anchor for >100 legend (fraction of `.spl-track` width, same as photo columns). */

const HOT_BOX_AXIS_DB = 118



function axisPct(db?: number): string {

  const v = clampAxisDb(typeof db === 'number' ? db : 0)

  return `${(v / 120) * 100}%`

}



function anchorStyle(db?: number) {

  return {

    left: axisPct(db),

    transform: 'translateX(-50%)',

  } as Record<string, string>

}



/** Right edge of box meets this tick; extends left toward mid-scale (avoid covering ~81 mixer). */

function hotBoxStyle() {

  return {

    left: axisPct(HOT_BOX_AXIS_DB),

    transform: 'translateX(-100%)',

  } as Record<string, string>

}



function resolveAssetUrl(url: string) {

  if (/^https?:\/\//.test(url))

    return url

  if (url.startsWith('/'))

    return `${import.meta.env.BASE_URL}${url.slice(1)}`

  return url

}



const imgFrame = 'overflow-hidden rounded-lg border border-white/20 bg-slate-900/50 shadow-md'

const thumbImg = 'pointer-events-none block h-auto max-h-[5.5rem] w-full max-w-[8.25rem] object-cover object-center sm:max-h-[6rem] sm:max-w-[8.75rem] md:max-h-[6.25rem] md:max-w-[9.25rem]'

/** Stem height driven by `--spl-stem-h` on `.spl-track-layout` */

const stemAfterCaptionUpper

  = 'spl-stem w-px shrink-0 border-l-[2px] border-dashed border-white/34'

/** Lower: same dash; `flex-col-reverse` paints stem adjacent to gradient */

const stemAfterCaptionLower

  = 'spl-stem w-px shrink-0 border-l-[2px] border-dashed border-white/34'



/**

 * Typography: Slidev `.slidev-layout p { font-size: 1rem }` overrides utility classes on `<p>`.

 * Use `spl-copy` + scoped CSS so axis / captions / list match exactly (size + weight).

 */

const splCopy = 'spl-copy text-white/[0.8]'

const axisTick = `${splCopy} flex justify-between`

const capBlock = `max-w-[9.75rem] shrink-0 text-center whitespace-pre-line ${splCopy}`

const hotBoxTitle = `${splCopy} mb-1 text-red-100/95`

/** Custom row bullets — no UA list indent (title + lines share one left edge) */

const hotBoxList = `${splCopy} spl-hot-list space-y-px`

const placeholderText = 'spl-copy text-white/45'



const topKeys = ['topLeft', 'topMidLeft', 'topMidRight'] as const

const bottomKeys = ['bottomLeft', 'bottomMidLeft', 'bottomMidRight', 'bottomRight'] as const

</script>



<template>

  <div

    class="spl-pressure-level-diagram relative mx-auto -mt-4 w-full max-w-none text-left text-white/90 md:-mt-5"

    role="img"

    aria-label="Sound pressure level from 0 to 120 dB SPL with example scenes"

  >

    <div

      class="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"

      aria-hidden="true"

      style="background-image: radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0); background-size: 20px 20px;"

    />



    <div

      class="mx-auto flex w-full max-w-[min(110rem,100%)] flex-col px-[clamp(0.2rem,1.35vw,0.75rem)] md:px-[clamp(0.3rem,1.6vw,1rem)]"

    >

      <!-- Track: 0–120 mapping uses full inner width (no wide side columns) -->

      <div

        class="spl-track spl-track-layout relative mx-auto w-full max-w-[min(110rem,100%)]"

      >

        <!-- Upper band: thumbnails + stems; >100 card anchored to high-dB end of axis (not viewport corner) -->

        <div class="relative mx-auto h-[clamp(10.875rem,28.5vh,14rem)] w-full sm:h-[clamp(11.375rem,29.5vh,14.875rem)] md:h-[clamp(11.875rem,30.5vh,15.5rem)]">

          <!-- Loud-end legend: x-position locked to SPL scale (~118 dB), not viewport `right`; y near axis join -->

          <div

            class="absolute z-[35] bottom-[2.35rem] w-max max-w-[min(calc(100%-1rem),40vw)] rounded-md border border-red-400/45 bg-red-950/82 px-2.5 py-1.5 shadow-md backdrop-blur-[2px]"

            :style="hotBoxStyle()"

          >

            <div :class="hotBoxTitle">

              &gt; 100 dB SPL

            </div>

            <ul :class="[hotBoxList, 'whitespace-normal']">

              <li>夜店或演唱会前排</li>

              <li>近距离烟花爆竹</li>

              <li>地铁车厢部分时刻峰值</li>

              <li>冲击钻</li>

              <li>烟雾报警器</li>

            </ul>

          </div>



          <!-- Mirror of lower zone: `--spl-band-edge` outer inset, `--spl-bridge-y` clearance to gradient bar -->


          <div class="spl-anchor-zone spl-anchor-zone-upper">

            <template

              v-for="ky in topKeys"

              :key="'t-' + ky"

            >

              <div

                class="absolute bottom-0 flex max-w-[96vw] flex-col items-center gap-y-1"

                :style="anchorStyle(cell(ky).dbSpl)"

              >

                <div class="shrink-0" :class="imgFrame">

                  <img

                    v-if="cell(ky).src"

                    class="rounded-[6px]"

                    :src="resolveAssetUrl(cell(ky).src!)"

                    :alt="cell(ky).alt || ''"

                    :class="[thumbImg, ky === 'topMidRight' ? 'spl-thumb--mixing' : '']"

                  />

                <div

                  v-else

                  :class="['flex items-center justify-center bg-slate-800/84 py-4', placeholderText, ky === 'topMidRight' ? 'min-h-[5rem] w-[clamp(120px,18vw,9.75rem)]' : 'min-h-[4.25rem] w-[clamp(112px,18vw,8.5rem)]']"

                >

                    {{ cell(ky).placeholder ?? 'photo' }}

                  </div>

                </div>

                <div :class="capBlock">

                  {{ cell(ky).caption }}

                </div>

                <div :class="stemAfterCaptionUpper" aria-hidden="true" />

              </div>

            </template>

          </div>

        </div>



        <!-- Ticks are out-of-flow (`bottom-full`) so only the gradient bar consumes vertical layout; stem clearance = `--spl-bridge-y` on both bands -->

        <div class="relative z-[20] mx-auto w-full">

          <div class="w-full min-w-0">

            <div class="spl-axis-visual relative w-full">

              <div

                :class="[

                  axisTick,

                  'spl-axis-ticks pointer-events-none absolute inset-x-0 bottom-full z-[21] mb-[2px]',

                ]"

              >

                <span class="-translate-x-px">0 dB SPL</span>

                <span class="translate-x-px">120 dB SPL</span>

              </div>

              <div class="relative">

                <span class="sr-only">Color gradient from 0 to 120 dB SPL</span>

                <div

                  class="h-[0.9rem] w-full rounded-full sm:h-[1.025rem] md:h-[1.05rem] lg:h-[1.125rem]"

                  aria-hidden="true"

                  style="background: linear-gradient(90deg, rgb(34 197 94) 0%, rgb(250 204 21) 50%, rgb(220 38 38) 100%); box-shadow: inset 0 1px 1px rgb(0 0 0 / 0.38);"

                />

              </div>

            </div>

          </div>

        </div>



        <!-- Lower band -->

        <div class="relative mx-auto h-[clamp(10.875rem,28.5vh,14rem)] w-full sm:h-[clamp(11.375rem,29.5vh,14.875rem)] md:h-[clamp(11.875rem,30.5vh,15.5rem)]">

          <!-- Same stem-to-bar gap as upper: only `--spl-bridge-y` (ticks no longer sit in layout between band and bar) -->

          <div class="spl-anchor-zone spl-anchor-zone-lower">

            <template

              v-for="ky in bottomKeys"

              :key="'b-' + ky"

            >

              <!-- Same DOM order as upper row (img → caption → stem); col-reverse lifts stem beside axis -->

              <div

                class="absolute top-0 flex max-w-[96vw] flex-col-reverse items-center gap-y-1"

                :style="anchorStyle(cell(ky).dbSpl)"

              >

                <div class="shrink-0" :class="imgFrame">

                  <img

                    v-if="cell(ky).src"

                    class="rounded-[6px]"

                    :src="resolveAssetUrl(cell(ky).src!)"

                    :alt="cell(ky).alt || ''"

                    :class="[thumbImg, ky === 'bottomMidRight' ? 'spl-thumb--beep' : '']"

                  />

                <div

                  v-else

                  :class="['flex items-center justify-center bg-slate-800/84 py-4', placeholderText, ky === 'bottomMidRight' ? 'min-h-[4.75rem] w-[clamp(118px,18vw,9.25rem)]' : 'min-h-[4.25rem] w-[clamp(112px,18vw,8.5rem)]']"

                >

                    {{ cell(ky).placeholder }}

                  </div>

                </div>

                <div :class="capBlock">

                  {{ cell(ky).caption }}

                </div>

                <div :class="stemAfterCaptionLower" aria-hidden="true" />

              </div>

            </template>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>



<style scoped>

/**

 * Mirrored anchor zones + one clearance to the colored bar.

 * Tick labels use `bottom-full` (no layout height under the upper band); stem tip ↔ bar edge = `--spl-bridge-y` on both sides.

 */

.spl-pressure-level-diagram .spl-track-layout {

  --spl-stem-h: 0.75rem;

  --spl-bridge-y: clamp(2px, 0.5vmin, 4px);

  --spl-band-edge: clamp(2.75rem, 7.5vh, 3.25rem);

}



.spl-pressure-level-diagram .spl-anchor-zone {

  position: absolute;

  inset-inline: 0;

}



.spl-pressure-level-diagram .spl-anchor-zone-upper {

  top: var(--spl-band-edge);

  bottom: var(--spl-bridge-y);

}



.spl-pressure-level-diagram .spl-anchor-zone-lower {

  top: var(--spl-bridge-y);

  bottom: var(--spl-band-edge);

}



.spl-pressure-level-diagram .spl-track-layout :where(.spl-stem) {

  height: var(--spl-stem-h);

}



.spl-pressure-level-diagram img {

  user-select: none;

}



/**

 * Larger thumbs: Uno arbitrary classes in standalone script strings may not generate CSS;

 * modifiers here always apply — tune rem below.

 */

.spl-pressure-level-diagram img.spl-thumb--mixing {

  width: auto !important;

  max-height: 7rem !important;

  max-width: 10.5rem !important;

}



.spl-pressure-level-diagram img.spl-thumb--beep {

  width: auto !important;

  max-height: 7.25rem !important;

  max-width: 10.75rem !important;

}



@media (width >= 640px) {

  .spl-pressure-level-diagram img.spl-thumb--mixing {

    max-height: 7.75rem !important;

    max-width: 11.25rem !important;

  }



  .spl-pressure-level-diagram img.spl-thumb--beep {

    max-height: 7.5rem !important;

    max-width: 11rem !important;

  }

}



@media (width >= 768px) {

  .spl-pressure-level-diagram img.spl-thumb--mixing {

    max-height: 8rem !important;

    max-width: 12rem !important;

  }



  .spl-pressure-level-diagram img.spl-thumb--beep {

    max-height: 7.85rem !important;

    max-width: 11.5rem !important;

  }

}



/**

 * Slidev applies `.slidev-layout p { font-size: 1rem }` globally; monospace also reads smaller.

 * Lock one size + weight for every diagram label (caption, axis ticks, hot list).

 */

.spl-pressure-level-diagram :where(.spl-copy, .spl-hot-list li) {

  font-family: inherit;

  font-size: 12px;

  font-weight: 400;

  line-height: 1.375;

}



/**

 * No native list markers: Slidev / UA often keep `padding-inline-start` on `ul` / `::marker` indent.

 * Flex row + `::before` gives one dot flush with the title text block.

 */

.slidev-layout .spl-pressure-level-diagram ul.spl-hot-list {

  list-style: none;

  margin: 0;

  padding: 0;

  padding-inline-start: 0 !important;

  margin-inline-start: 0 !important;

}



.slidev-layout .spl-pressure-level-diagram ul.spl-hot-list > li {

  display: flex;

  flex-direction: row;

  align-items: flex-start;

  column-gap: 0.3em;

  margin: 0;

  padding: 0;

  padding-inline-start: 0 !important;

  list-style: none;

  list-style-type: none !important;

}



.slidev-layout .spl-pressure-level-diagram ul.spl-hot-list > li::marker {

  content: none;

}



.slidev-layout .spl-pressure-level-diagram ul.spl-hot-list > li::before {

  content: '\2022';

  flex-shrink: 0;

  width: 0.5em;

  text-align: center;

  color: rgb(255 255 255 / 0.72);

  font-size: 0.95em;

  line-height: 1.375;

}

</style>

