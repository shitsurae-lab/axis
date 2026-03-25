<script setup>
// スクロール量を取得して視差効果（Parallax）に使う
const { y } = useWindowScroll();
</script>

<template>
  <div
    class="bg-white text-black min-h-[200vh] font-sans selection:bg-black selection:text-white"
  >
    <!-- 背景に走る細い「軸（Axis）」ライン -->
    <div class="fixed inset-0 flex justify-center pointer-events-none">
      <div
        class="w-[1px] h-full bg-gray-100 italic text-[10px] text-gray-400 pl-2 pt-10"
      >
        AXIS_LOGIC_PROTOTYPE
      </div>
    </div>

    <!-- メインコンテンツ -->
    <main class="relative flex flex-col items-center pt-[30vh]">
      <!-- 視差効果：スクロールに合わせて少し遅れて動く大きな文字 -->
      <h1
        :style="{ transform: `translateY(${y * 0.3}px)` }"
        class="text-[18vw] font-black tracking-tighter leading-none uppercase select-none"
      >
        Axis
      </h1>

      <div class="mt-24 max-w-md px-10 space-y-12">
        <p class="text-sm leading-relaxed text-gray-500">
          Next.jsとNuxt.js。異なるフレームワークを横断する技術の「軸」。
          ミニマルな構造と、心地よい動きをここで検証する。
        </p>

        <!-- ポイントカラー1色の誘導ボタン -->
        <a
          href="https://vector-n.net"
          class="inline-block px-10 py-4 bg-blue-600 text-white font-bold hover:bg-black transition-all duration-500"
        >
          VIEW PORTFOLIO →
        </a>
      </div>
    </main>
  </div>
</template>

<style>
/* ヌルッとしたスクロール感を出す */
html {
  scroll-behavior: smooth;
}
</style>
