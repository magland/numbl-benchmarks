window.BENCHMARK_DATA = {
  "lastUpdate": 1776983652747,
  "repoUrl": "https://github.com/flatironinstitute/numbl",
  "entries": {
    "numbl benchmarks (Linux)": [
      {
        "commit": {
          "author": {
            "email": "jmagland@flatironinstitute.org",
            "name": "Jeremy Magland",
            "username": "magland"
          },
          "committer": {
            "email": "jmagland@flatironinstitute.org",
            "name": "Jeremy Magland",
            "username": "magland"
          },
          "distinct": true,
          "id": "3dc4d056cd393c5ee8ebd5a66cfc3991f32c92c2",
          "message": "ci: add benchmark workflow that publishes to magland/numbl-benchmarks\n\nNew `.github/workflows/benchmarks.yml` runs the full benchmarks/*.m suite\nunder --opt 1, --opt e1, and --opt e1 --par on Linux and macOS, takes the\nmedian of 3 runs per (benchmark, mode), and publishes 84 metrics/OS to\nmagland/numbl-benchmarks via github-action-benchmark. Chart will be at\nhttps://magland.github.io/numbl-benchmarks/dev/bench/.\n\nRuns on push to main + workflow_dispatch. Independent from the main CI —\nno needs chain, not a required check. Matrix is serialized (max-parallel=1\n+ concurrency group) so two runs never race for the target gh-pages branch.\n\nRequires one-time setup: numbl-benchmarks repo with orphan gh-pages branch,\nfine-grained PAT with contents:write on that repo, stored as BENCHMARK_PAT\nsecret on this repo.",
          "timestamp": "2026-04-23T15:58:37-04:00",
          "tree_id": "6ffaf3bee70088323dce403c4a75ae8729b6e37a",
          "url": "https://github.com/flatironinstitute/numbl/commit/3dc4d056cd393c5ee8ebd5a66cfc3991f32c92c2"
        },
        "date": 1776974773430,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.5101,
            "unit": "s"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3548,
            "unit": "s"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.3551,
            "unit": "s"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.5259,
            "unit": "s"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0628,
            "unit": "s"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0626,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.417,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.704,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.303,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.303,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 1.51,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 3.24,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.057,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.147,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.116,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.305,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 0.977,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 1.604,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.058,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.148,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.122,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.303,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.424,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.058,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.536,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 8.256,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 9.218,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.427,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.24,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.094,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 19.844,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.126,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.389,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.17,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.128,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.035,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.828,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 1.675,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.126,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.185,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.113,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.066,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.041,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.319,
            "unit": "s"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 0.847,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.054,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 1.83,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 2.254,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.052,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.034,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.13,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 4.414,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.024,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.042,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.028,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.021,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.037,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.124,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.275,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.024,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.041,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.029,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.021,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.035,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.123,
            "unit": "s"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.275,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.26488,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.676117,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 4.022395,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 10.91266,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.264102,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.290193,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.30472,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.684421,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 4.008265,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 10.88304,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.256191,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.267953,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.26882,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.680927,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.997553,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 10.864331,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.24003,
            "unit": "s"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.27241,
            "unit": "s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jmagland@flatironinstitute.org",
            "name": "Jeremy Magland",
            "username": "magland"
          },
          "committer": {
            "email": "jmagland@flatironinstitute.org",
            "name": "Jeremy Magland",
            "username": "magland"
          },
          "distinct": true,
          "id": "fa5c59387b67b5e58828e4dd8f8979ff0db351f0",
          "message": "ci: fix macOS benchmark build + stamp runner info on each metric\n\nbinding.gyp: -lmvec is glibc-only; move it into the Linux conditional so\n`npm run build:addon` doesn't fail on macOS looking for a nonexistent\nlibmvec.dylib.\n\nbenchmarks.yml: Homebrew's openblas is keg-only on Apple Silicon (not\nsymlinked into /opt/homebrew/lib), so the linker can't find it with\nplain -lopenblas. Export LIBRARY_PATH/CPATH from `brew --prefix openblas`\nbefore `npm run build:addon` on macOS.\n\nrun_benchmarks.ts: stamp each metric's `extra` field with runner context\n(OS, CPU, RAM, Node, cc version, GH runner image id) plus the raw\nper-run values that produced the median. github-action-benchmark shows\nthis in chart tooltips, so when a runner-image upgrade silently shifts\na baseline, the diff point carries its own environment fingerprint.",
          "timestamp": "2026-04-23T16:22:36-04:00",
          "tree_id": "c168dafdb72348bfa22969d9e408f27de4e237b3",
          "url": "https://github.com/flatironinstitute/numbl/commit/fa5c59387b67b5e58828e4dd8f8979ff0db351f0"
        },
        "date": 1776976180861,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.5126,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5126, 0.5100, 0.5236]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3553,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3553, 0.3614, 0.3543]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.354,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3540, 0.3541, 0.3538]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.5231,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5231, 0.5196, 0.5260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0627,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0627, 0.0628, 0.0626]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0626,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0626, 0.0626, 0.0625]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.372,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3650, 0.3720, 0.3760]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.674,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6670, 0.6750, 0.6740]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.294,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2890, 0.2940, 0.2960]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.302,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3020, 0.3020, 0.3020]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 1.453,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4430, 1.4530, 1.4600]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 3.097,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.0650, 3.0970, 3.1080]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0520, 0.0490, 0.0510]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.14,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1400, 0.1400, 0.1400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.109,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1090, 0.1090, 0.1090]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.303,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3030, 0.3030, 0.3040]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 0.983,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9830, 0.9810, 0.9830]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 1.587,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5870, 1.5830, 1.5880]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0510, 0.0510, 0.0500]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.148,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1480, 0.1500, 0.1400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.105,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1070, 0.1050, 0.1040]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.303,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3030, 0.3050, 0.3030]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.417,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4170, 0.4210, 0.4160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.026,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0260, 1.0330, 1.0130]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.53,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5300, 0.5290, 0.5350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 8.316,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.3160, 8.2310, 8.3270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 9.25,
            "unit": "s",
            "extra": "median of 3/3 runs: [9.2880, 9.2470, 9.2500]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.42,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4180, 0.4200, 0.4290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.232,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2280, 0.2320, 0.2400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.067,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0630, 1.0670, 1.0980]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 19.842,
            "unit": "s",
            "extra": "median of 3/3 runs: [19.8420, 19.7250, 19.8790]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.126,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1260, 0.1510, 0.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.388,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3900, 0.3880, 0.3880]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.165,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1650, 0.1650, 0.1660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.129,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1290, 0.1280, 0.1320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.034,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0350, 0.0340, 0.0310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.828,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8280, 0.8310, 0.8180]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 1.673,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6730, 1.6970, 1.6610]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.125,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1250, 0.1260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.185,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1850, 0.1860, 0.1850]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.108,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1080, 0.1080, 0.1060]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0660, 0.0660, 0.0660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.036,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0360, 0.0350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.315,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3140, 0.3150, 0.3200]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 0.836,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8340, 0.8360, 0.8390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.064,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0650, 0.0640, 0.0640]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 1.779,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6070, 2.0180, 1.7790]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 2.16,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1150, 2.2540, 2.1600]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0510, 0.0490, 0.0600]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.033,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0330, 0.0330, 0.0430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1290, 0.1270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 4.233,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9970, 4.5460, 4.2330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.029,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0290, 0.0240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0530, 0.0510, 0.0390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.035,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0350, 0.0270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.027,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0290, 0.0270, 0.0210]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.045,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0450, 0.0470, 0.0330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.124,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1230, 0.1240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.312,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3200, 0.3120, 0.2680]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.023,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0230, 0.0230, 0.0300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.04,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0390, 0.0400, 0.0530]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.027,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0270, 0.0270, 0.0370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.021,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0210, 0.0210, 0.0290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.034,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0330, 0.0340, 0.0440]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.123,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1230, 0.1240, 0.1230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.269,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2670, 0.2690, 0.3160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.235653,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1862, 4.2357, 4.2913]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.690231,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6902, 0.7127, 0.6710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 3.988936,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9889, 3.9421, 4.0749]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 10.77895,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.7790, 10.6843, 10.9751]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.256601,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2566, 1.1286, 1.2680]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.275571,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2705, 0.2756, 0.2872]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.256576,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.3476, 4.1717, 4.2566]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.677583,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6776, 0.6685, 0.6783]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 3.988831,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9888, 4.0119, 3.9736]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 10.757254,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.9159, 10.7383, 10.7573]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.244137,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2520, 1.2441, 1.2083]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.26043,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2669, 0.2604, 0.2586]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.271294,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1586, 4.2713, 4.3095]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.70381,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7282, 0.6744, 0.7038]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.998054,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.8631, 4.0302, 3.9981]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 10.871535,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.4927, 10.8715, 10.9441]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.224723,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0992, 1.2247, 1.2496]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.291897,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2609, 0.2974, 0.2919]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jmagland@flatironinstitute.org",
            "name": "Jeremy Magland",
            "username": "magland"
          },
          "committer": {
            "email": "jmagland@flatironinstitute.org",
            "name": "Jeremy Magland",
            "username": "magland"
          },
          "distinct": true,
          "id": "83d1aac055364fca59980dc43b428700d3d7f6e1",
          "message": "ci: parallelize benchmark matrix, publish in a single follow-up job\n\nLinux and macOS runs now execute concurrently. Each uploads its\nbenchmarks-results.json as a 7-day artifact. A follow-up `publish` job\ndownloads both and calls github-action-benchmark twice (once per OS) in\nsequence from a single runner — so the two pushes to numbl-benchmarks'\ngh-pages branch can never race, but the expensive benchmark runs\noverlap instead of serializing.\n\nGuards on the publish step:\n- runs if the matrix didn't get skipped/cancelled, even if one OS failed\n  (so a good Linux run still publishes when macOS errors, and vice-versa)\n- each OS's publish step is gated on its own download-artifact outcome,\n  so we don't try to publish a non-existent file.\n\nWall-time drops from ~(Linux + macOS) to ~max(Linux, macOS) + ~30 s\npublish.",
          "timestamp": "2026-04-23T16:50:07-04:00",
          "tree_id": "93f572df151cf1666de689454030c042d4073482",
          "url": "https://github.com/flatironinstitute/numbl/commit/83d1aac055364fca59980dc43b428700d3d7f6e1"
        },
        "date": 1776978914348,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.4912,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4900, 0.4912, 0.4931]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3724,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3720, 0.3780, 0.3724]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.3712,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3712, 0.3712, 0.3709]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.4934,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4934, 0.4913, 0.4994]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0705,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0708, 0.0704, 0.0705]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0704,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0702, 0.0704, 0.0705]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.408,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4120, 0.4040, 0.4080]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.699,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6990, 0.6920, 0.7160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.301,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3010, 0.2990, 0.3060]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.326,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3260, 0.3400, 0.3260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 1.436,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4740, 1.4360, 1.4180]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 3.173,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.2130, 3.1710, 3.1730]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.067,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0690, 0.0630, 0.0670]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.141,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1390, 0.1410, 0.1430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.132,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1320, 0.1260, 0.1330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.326,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3260, 0.3250, 0.3260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 1.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0370, 1.0390, 1.0340]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 1.702,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.7030, 1.6950, 1.7020]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.065,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0670, 0.0650, 0.0640]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.136,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1380, 0.1360, 0.1360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.126,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1310, 0.1260, 0.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.325,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3250, 0.3250, 0.3250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.425,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4250, 0.4260, 0.4250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.078,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0850, 1.0780, 1.0750]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.536,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5320, 0.5360, 0.5360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 7.678,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.8110, 7.6780, 7.6590]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 8.954,
            "unit": "s",
            "extra": "median of 3/3 runs: [9.6980, 8.9540, 8.9330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.434,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4280, 0.4410, 0.4340]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.238,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2380, 0.2360, 0.2380]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.019,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0050, 1.0190, 1.0450]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 18.864,
            "unit": "s",
            "extra": "median of 3/3 runs: [19.7120, 18.8640, 18.8440]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.125,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1250, 0.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.385,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3810, 0.4100, 0.3850]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.165,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1650, 0.1800, 0.1650]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1300, 0.1260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.043,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0430, 0.0430, 0.0430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.847,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8480, 0.8390, 0.8470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 1.693,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6890, 1.7270, 1.6930]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.125,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1250, 0.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.176,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1760, 0.1760, 0.1760]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.111,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1120, 0.1110, 0.1100]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.069,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0680, 0.0690, 0.0700]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.042,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0430, 0.0420, 0.0420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.373,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3730, 0.3740, 0.3720]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 0.896,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8970, 0.8960, 0.8940]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0680, 0.0660, 0.0620]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 1.376,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3640, 1.3760, 1.4470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 1.57,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5700, 1.5580, 1.6710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.062,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0620, 0.0590, 0.0630]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.05,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0500, 0.0510, 0.0500]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.126,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1260, 0.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 3.24,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.2400, 3.2370, 3.4180]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.026,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0270, 0.0260, 0.0260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.06,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0610, 0.0600, 0.0600]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.032,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0320, 0.0330, 0.0320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.025,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0250, 0.0240, 0.0250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.048,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0480, 0.0480, 0.0480]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.121,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1200, 0.1210, 0.1220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.312,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3130, 0.3120, 0.3120]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.026,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0260, 0.0270, 0.0260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.062,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0610, 0.0620, 0.0640]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.033,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0320, 0.0330, 0.0330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.026,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0240, 0.0260, 0.0260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.05,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0510, 0.0500, 0.0490]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.121,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1200, 0.1210, 0.1230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.319,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3150, 0.3190, 0.3210]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.057254,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0573, 3.9952, 4.0944]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.644565,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6446, 0.6580, 0.6303]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 3.929493,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0169, 3.8723, 3.9295]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 10.474007,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.5784, 10.2670, 10.4740]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.178878,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2126, 1.0979, 1.1789]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.303706,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3102, 0.3037, 0.3016]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 3.997258,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9973, 3.9733, 4.0529]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.626934,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6270, 0.6056, 0.6269]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 3.972738,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9084, 3.9811, 3.9727]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 10.324201,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.3242, 10.3033, 10.4642]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.164933,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1649, 1.1165, 1.1756]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.29198,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2920, 0.2888, 0.2939]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.026873,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1175, 4.0269, 3.9801]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.633086,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6331, 0.6386, 0.6060]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.945629,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9456, 3.9518, 3.9240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 10.413246,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.5401, 10.4132, 10.3040]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.162498,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1819, 1.1598, 1.1625]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.294694,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2947, 0.2897, 0.2953]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.fortunato@gmail.com",
            "name": "Dan Fortunato",
            "username": "danfortunato"
          },
          "committer": {
            "email": "dan.fortunato@gmail.com",
            "name": "Dan Fortunato",
            "username": "danfortunato"
          },
          "distinct": true,
          "id": "4d4acee6efe69c246c89affe518a1c7823be04d6",
          "message": "benchmarks: refresh macOS numbers (M4 Max, MATLAB R2025b, numbl 0.2.0)\n\nRe-collect the macOS section in each benchmark README against\nMATLAB R2025b. Adds --opt e1 / --opt e1 --par / MATLAB 1-thread /\nMATLAB multi rows for files that only had partial macOS data, and\nadds macOS sections to complex_scalar_bench, complex_tensor_bench,\nand chunkie_helmholtz_starfish (previously Linux-only).",
          "timestamp": "2026-04-23T18:09:22-04:00",
          "tree_id": "0ffdf6fc9077bd18448899cb7e802ea7b25c6c90",
          "url": "https://github.com/flatironinstitute/numbl/commit/4d4acee6efe69c246c89affe518a1c7823be04d6"
        },
        "date": 1776982603603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.5161,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5226, 0.5161, 0.5087]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3589,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3589, 0.3637, 0.3542]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.354,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3540, 0.3545, 0.3536]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.5169,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5135, 0.5185, 0.5169]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0627,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0627, 0.0628, 0.0626]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0626,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0626, 0.0627, 0.0625]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.385,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3810, 0.3850, 0.3860]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.668,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6680, 0.6790, 0.6660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.292,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2920, 0.2920, 0.2940]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.302,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3020, 0.3020, 0.3020]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 1.456,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4500, 1.4630, 1.4560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 3.103,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.0940, 3.1210, 3.1030]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.05,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0500, 0.0500, 0.0520]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.146,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1390, 0.1460, 0.1490]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.107,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1100, 0.1050, 0.1070]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.302,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3020, 0.3020, 0.3020]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 0.977,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9820, 0.9770, 0.9760]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 1.584,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5840, 1.5800, 1.5860]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.05,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0490, 0.0500, 0.0560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.146,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1400, 0.1470, 0.1460]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.111,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1130, 0.1110, 0.1070]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.303,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3030, 0.3020, 0.3330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.419,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4160, 0.4190, 0.4310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.029,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0220, 1.0290, 1.0710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.525,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5250, 0.5250, 0.5250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 8.2,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.2000, 8.2210, 8.1950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 9.155,
            "unit": "s",
            "extra": "median of 3/3 runs: [9.1550, 9.1290, 9.1960]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.414,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4160, 0.4140, 0.4140]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.224,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2240, 0.2250, 0.2240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.065,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0630, 1.0690, 1.0650]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 19.582,
            "unit": "s",
            "extra": "median of 3/3 runs: [19.5820, 19.5820, 19.6190]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.126,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1260, 0.1260, 0.1260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.387,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3870, 0.3870, 0.3900]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.165,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1650, 0.1630, 0.1680]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1280, 0.1270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.031,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0310, 0.0300, 0.0310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.829,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8270, 0.8290, 0.8300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 1.663,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6630, 1.6620, 1.6710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.126,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1240, 0.1260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.186,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1860, 0.1850, 0.1860]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.104,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1040, 0.1060, 0.1010]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0660, 0.0660, 0.0650]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.032,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0310, 0.0320, 0.0330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.315,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3120, 0.3150, 0.3190]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 0.828,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8260, 0.8280, 0.8300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.059,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0590, 0.0500, 0.0590]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 1.386,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3690, 1.3860, 1.4420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 1.958,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.9670, 1.9450, 1.9580]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.057,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0570, 0.0460, 0.0580]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.041,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0330, 0.0410]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1260, 0.1270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 3.622,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.6220, 3.5850, 3.6850]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.028,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0280, 0.0230, 0.0280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.048,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0480, 0.0370, 0.0480]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.034,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0340, 0.0260, 0.0340]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.027,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0270, 0.0200, 0.0270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.041,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0410, 0.0320, 0.0410]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.123,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1230, 0.1230, 0.1230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.301,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3010, 0.2610, 0.3020]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.023,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0230, 0.0280, 0.0230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0480, 0.0360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.026,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0260, 0.0340, 0.0260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.021,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0210, 0.0270, 0.0210]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.031,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0310, 0.0410, 0.0310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.123,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1230, 0.1230, 0.1230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.261,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2610, 0.3010, 0.2610]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.119225,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0953, 4.1872, 4.1192]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.669029,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6690, 0.6849, 0.6635]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 3.931532,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9085, 3.9515, 3.9315]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 10.569341,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.5370, 10.6984, 10.5693]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.23308,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2331, 1.2351, 1.2201]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.260581,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2554, 0.2606, 0.2658]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.179153,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.2639, 4.1792, 4.0839]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.704372,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6808, 0.7044, 0.7392]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 3.814151,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9152, 3.7952, 3.8142]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 10.410391,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.7195, 10.4104, 10.3374]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.094779,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2237, 1.0948, 1.0507]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.259942,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2599, 0.2540, 0.2610]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.154238,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1542, 4.1718, 4.1288]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.676721,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6784, 0.6577, 0.6767]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.921331,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9213, 3.9358, 3.8018]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 10.609407,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.6094, 10.6173, 10.3757]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.213402,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2211, 1.2134, 1.1315]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.256456,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2531, 0.2565, 0.2607]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jmagland@flatironinstitute.org",
            "name": "Jeremy Magland",
            "username": "magland"
          },
          "committer": {
            "email": "jmagland@flatironinstitute.org",
            "name": "Jeremy Magland",
            "username": "magland"
          },
          "distinct": true,
          "id": "48aa1214f2ddd8be5b6bbe0d668f04e5ffc5aea7",
          "message": "addon: use Accelerate framework on macOS instead of openblas\n\nShips with macOS, so no Homebrew openblas install or keg-only linker\npath wrangling needed. Linux keeps -lopenblas.",
          "timestamp": "2026-04-23T18:11:53-04:00",
          "tree_id": "3a63eef828b8009966ab483da92d7dda4b537444",
          "url": "https://github.com/flatironinstitute/numbl/commit/48aa1214f2ddd8be5b6bbe0d668f04e5ffc5aea7"
        },
        "date": 1776983018635,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.5118,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5100, 0.5120, 0.5118]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3543,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3541, 0.3630, 0.3543]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.3541,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3540, 0.3541, 0.3573]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.5305,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5305, 0.5259, 0.5419]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0627,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0628, 0.0627, 0.0627]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0626,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0626, 0.0626, 0.0626]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.417,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4170, 0.4220, 0.4020]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.694,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6930, 0.6940, 0.7130]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.313,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3170, 0.3080, 0.3130]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.306,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3100, 0.3050, 0.3060]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 1.51,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5100, 1.5120, 1.4970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 3.241,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.2470, 3.2410, 3.2310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.057,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0580, 0.0520, 0.0570]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.149,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1500, 0.1410, 0.1490]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.126,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1260, 0.1220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.309,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3070, 0.3090, 0.3090]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 0.987,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9970, 0.9870, 0.9790]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 1.616,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6380, 1.6150, 1.6160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.06,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0600, 0.0620, 0.0570]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.147,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1480, 0.1470, 0.1470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.122,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1240, 0.1210, 0.1220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.306,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3060, 0.3060, 0.3050]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.418,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4170, 0.4180, 0.4200]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.054,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0550, 1.0540, 1.0510]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.549,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5490, 0.5560, 0.5400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 8.319,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.3190, 8.3040, 8.3310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 9.308,
            "unit": "s",
            "extra": "median of 3/3 runs: [9.3610, 9.2400, 9.3080]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.441,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4410, 0.4370, 0.4450]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.251,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2510, 0.2500, 0.2620]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.117,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1170, 1.1190, 1.0960]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 19.983,
            "unit": "s",
            "extra": "median of 3/3 runs: [20.0380, 19.9070, 19.9830]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.125,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1250, 0.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.39,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3890, 0.3910, 0.3900]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.172,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1680, 0.1740, 0.1720]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.132,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1320, 0.1320, 0.1330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0360, 0.0380, 0.0370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.821,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8210, 0.8190, 0.8210]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 1.679,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6720, 1.6790, 1.6800]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.126,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1260, 0.1260, 0.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.185,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1840, 0.1850, 0.1860]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.107,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1030, 0.1070, 0.1070]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.067,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0670, 0.0660, 0.0670]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.038,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0400, 0.0380]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.318,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3990, 0.3180, 0.3150]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 0.842,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9160, 0.8420, 0.8380]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.061,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0610, 0.0600, 0.0620]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 1.906,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.9060, 1.9080, 1.8940]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 2.189,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.2170, 2.1780, 2.1890]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.06,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0600, 0.0630, 0.0590]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.042,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0460, 0.0420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.128,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1280, 0.1280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 4.382,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.4130, 4.3820, 4.3730]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.03,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0280, 0.0300, 0.0300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.052,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0480, 0.0520, 0.0530]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.036,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0340, 0.0370, 0.0360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.029,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0270, 0.0290, 0.0290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.045,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0450, 0.0450]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.123,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1230, 0.1240, 0.1230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.316,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3030, 0.3170, 0.3160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.029,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0430, 0.0290, 0.0290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.05,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0520, 0.0500, 0.0500]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.035,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0360, 0.0350, 0.0350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.028,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0290, 0.0270, 0.0280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.043,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0450, 0.0430, 0.0430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.124,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1240, 0.1250, 0.1230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.308,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3300, 0.3080, 0.3080]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.305419,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.2589, 4.3054, 4.3823]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.700019,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7022, 0.6945, 0.7000]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 4.004585,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0046, 4.0326, 4.0034]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 10.953254,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.8827, 10.9533, 10.9813]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.270244,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2702, 1.2742, 1.2503]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.270976,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2714, 0.2710, 0.2638]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.209114,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1932, 4.2091, 4.2376]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.679677,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6797, 0.6608, 0.6985]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 3.957394,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9503, 3.9574, 4.0311]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 10.706704,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.7067, 10.6998, 10.8904]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.240491,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2405, 1.2265, 1.2659]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.269829,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2698, 0.2655, 0.2722]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.258879,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.2657, 4.2589, 4.1291]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.686474,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6865, 0.6730, 0.6996]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.963725,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0324, 3.9637, 3.8700]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 10.766744,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.8995, 10.7667, 10.4687]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.229311,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2536, 1.2293, 1.1190]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.26505,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2734, 0.2651, 0.2585]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.fortunato@gmail.com",
            "name": "Dan Fortunato",
            "username": "danfortunato"
          },
          "committer": {
            "email": "dan.fortunato@gmail.com",
            "name": "Dan Fortunato",
            "username": "danfortunato"
          },
          "distinct": true,
          "id": "a82709ac5a5032ee823b1dd33ed5a0cdb5d2a8d3",
          "message": "addon: fix macOS load segfault after Accelerate switch\n\nopenblas_set_num_threads is unresolved when linking against Accelerate\n(-framework Accelerate doesn't provide it), so Init() crashed at\nmodule load time. Guard the declaration and call with __APPLE__ and\nset VECLIB_MAXIMUM_THREADS=1 on macOS to match the single-thread BLAS\nintent.",
          "timestamp": "2026-04-23T18:27:20-04:00",
          "tree_id": "2306285579f8b1b037bd29faf87d1b23bb41445b",
          "url": "https://github.com/flatironinstitute/numbl/commit/a82709ac5a5032ee823b1dd33ed5a0cdb5d2a8d3"
        },
        "date": 1776983652567,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.4898,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4896, 0.4898, 0.4904]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3168,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3164, 0.3260, 0.3168]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.3163,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3172, 0.3163, 0.3162]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.6057,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6207, 0.6049, 0.6057]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0642,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0641, 0.0642, 0.0642]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0642,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0641, 0.0642, 0.0643]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 1.018,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0180, 1.0470, 0.9920]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 1.193,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1820, 1.1930, 1.1950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.54,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5400, 0.5570, 0.5400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.391,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3930, 0.3890, 0.3910]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 2.208,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.2080, 2.2630, 2.1960]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 5.341,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.3410, 5.4500, 5.3140]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.151,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1490, 0.1510, 0.1530]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.293,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2930, 0.2940, 0.2920]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.333,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3230, 0.3330, 0.3400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.396,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3920, 0.3960, 0.3970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 1.265,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2640, 1.2650, 1.2740]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 2.438,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.4210, 2.4380, 2.4560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.152,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1500, 0.1590, 0.1520]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.293,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2930, 0.2920, 0.2960]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.332,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3270, 0.3320, 0.3390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.397,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3950, 0.3970, 0.4000]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.396,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3960, 0.3950, 0.3970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.575,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5620, 1.5750, 1.5840]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.823,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8230, 0.8130, 0.8270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 7.943,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.9430, 7.9840, 7.8730]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 8.613,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.5870, 8.7240, 8.6130]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.7,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7060, 0.6960, 0.7000]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.42,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4240, 0.4070, 0.4200]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.554,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5610, 1.5540, 1.5520]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 20.045,
            "unit": "s",
            "extra": "median of 3/3 runs: [20.0450, 20.1780, 19.9850]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.293,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2940, 0.2930, 0.2930]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.364,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3650, 0.3640, 0.3640]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.242,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2420, 0.2290, 0.2550]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.291,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2910, 0.2930, 0.2830]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.064,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0680, 0.0640, 0.0600]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.754,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7530, 0.7650, 0.7540]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 2.009,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0120, 2.0080, 2.0090]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.293,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2940, 0.2930, 0.2910]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.182,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1840, 0.1820, 0.1820]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.146,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1470, 0.1460, 0.1340]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.105,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1040, 0.1100, 0.1050]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.067,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0680, 0.0670, 0.0580]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.307,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3220, 0.3070, 0.3060]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 1.104,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1190, 1.1040, 1.0760]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.13,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1300, 0.1300, 0.1270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 0.303,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3030, 0.3070, 0.3000]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 0.567,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5730, 0.5670, 0.5560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.128,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1280, 0.1290, 0.1280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.089,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0870, 0.0890, 0.0950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.116,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1150, 0.1160, 0.1160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 1.336,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3360, 1.3370, 1.3230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.065,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0650, 0.0650, 0.0770]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.099,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0990, 0.0970, 0.1170]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.074,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0740, 0.0740, 0.0900]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.064,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0640, 0.0640, 0.0760]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.089,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0890, 0.0880, 0.1110]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.118,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1220, 0.1140, 0.1180]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.512,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5120, 0.5010, 0.5890]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.068,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0670, 0.0680, 0.0700]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.114,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1140, 0.1250, 0.1130]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.081,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0750, 0.0810, 0.0810]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.068,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0640, 0.0680, 0.0690]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.096,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0880, 0.0960, 0.1020]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.115,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1130, 0.1150, 0.1160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.55,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5220, 0.5530, 0.5500]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.253506,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.2535, 4.2720, 4.2532]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.624804,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6193, 0.6535, 0.6248]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 3.861961,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.8620, 3.8885, 3.8556]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 10.839254,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.8393, 10.8687, 10.8097]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.197189,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2064, 1.1823, 1.1972]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.537039,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5377, 0.5248, 0.5370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.2559,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.2710, 4.1630, 4.2559]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.638317,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6383, 0.6334, 0.6492]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 3.825364,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.8390, 3.7292, 3.8254]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 10.719503,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.7974, 10.4823, 10.7195]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.08771,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1598, 1.0624, 1.0877]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.521046,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5210, 0.5185, 0.5370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.256869,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.2569, 4.3427, 4.2308]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.633628,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6233, 0.6336, 0.6620]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.880464,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.8805, 3.9725, 3.7388]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 10.857556,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.8576, 11.0780, 10.6062]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.198586,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1986, 1.2246, 1.0821]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.536221,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5362, 0.5470, 0.5339]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          }
        ]
      }
    ],
    "numbl benchmarks (macOS)": [
      {
        "commit": {
          "author": {
            "email": "jmagland@flatironinstitute.org",
            "name": "Jeremy Magland",
            "username": "magland"
          },
          "committer": {
            "email": "jmagland@flatironinstitute.org",
            "name": "Jeremy Magland",
            "username": "magland"
          },
          "distinct": true,
          "id": "fa5c59387b67b5e58828e4dd8f8979ff0db351f0",
          "message": "ci: fix macOS benchmark build + stamp runner info on each metric\n\nbinding.gyp: -lmvec is glibc-only; move it into the Linux conditional so\n`npm run build:addon` doesn't fail on macOS looking for a nonexistent\nlibmvec.dylib.\n\nbenchmarks.yml: Homebrew's openblas is keg-only on Apple Silicon (not\nsymlinked into /opt/homebrew/lib), so the linker can't find it with\nplain -lopenblas. Export LIBRARY_PATH/CPATH from `brew --prefix openblas`\nbefore `npm run build:addon` on macOS.\n\nrun_benchmarks.ts: stamp each metric's `extra` field with runner context\n(OS, CPU, RAM, Node, cc version, GH runner image id) plus the raw\nper-run values that produced the median. github-action-benchmark shows\nthis in chart tooltips, so when a runner-image upgrade silently shifts\na baseline, the diff point carries its own environment fingerprint.",
          "timestamp": "2026-04-23T16:22:36-04:00",
          "tree_id": "c168dafdb72348bfa22969d9e408f27de4e237b3",
          "url": "https://github.com/flatironinstitute/numbl/commit/fa5c59387b67b5e58828e4dd8f8979ff0db351f0"
        },
        "date": 1776976776063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.4088,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4088, 0.4087, 0.4096]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.1144,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1143, 0.1156, 0.1144]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.1197,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1160, 0.1225, 0.1197]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.345,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3450, 0.3402, 0.3901]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0436,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0454, 0.0427, 0.0436]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0465,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0465, 0.0464, 0.0465]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.41,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3230, 0.4290, 0.4100]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.762,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7280, 0.8080, 0.7620]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.709,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7110, 0.6810, 0.7090]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 1.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1270, 1.0660, 1.0250]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 2.175,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.3940, 2.1130, 2.1750]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 5.096,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.2820, 5.0960, 5.0810]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.058,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0530, 0.0580, 0.0630]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.3,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3020, 0.2980, 0.3000]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.13,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1540, 0.1160, 0.1300]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 1.042,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0630, 1.0350, 1.0420]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 1.753,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.7530, 1.7500, 1.7690]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 3.304,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.3250, 3.2580, 3.3040]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.061,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0450, 0.0630, 0.0610]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.281,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2780, 0.2810, 0.2820]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.147,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1470, 0.1540, 0.1460]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 1.039,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0390, 1.0380, 1.0420]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.702,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6390, 0.7100, 0.7020]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 2.232,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1470, 2.2460, 2.2320]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.609,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6070, 0.6090, 0.6130]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 6.33,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.3300, 6.1670, 6.3970]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 7.022,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.9620, 7.1780, 7.0220]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.501,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5010, 0.5000, 0.5330]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.2,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2000, 0.1980, 0.2000]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.586,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5550, 1.5870, 1.5860]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 16.239,
            "unit": "s",
            "extra": "median of 3/3 runs: [16.1570, 16.2390, 16.3500]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.278,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2770, 0.2780, 0.3230]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.926,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9090, 0.9260, 0.9300]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.247,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2480, 0.2470, 0.2450]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.273,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2760, 0.2650, 0.2730]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.041,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0360, 0.0430, 0.0410]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 1.4,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3940, 1.4000, 1.4720]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 3.16,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.1400, 3.1600, 3.2840]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.281,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2860, 0.2810, 0.2800]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.318,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4370, 0.3160, 0.3180]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.115,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1150, 0.1090, 0.1280]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.097,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0970, 0.0950, 0.0970]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.057,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0570, 0.0550, 0.0570]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.496,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5320, 0.4880, 0.4960]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 1.376,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5250, 1.3430, 1.3760]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.087,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0910, 0.0870, 0.0860]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 0.139,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1390, 0.1170, 0.1400]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 0.317,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3290, 0.3050, 0.3170]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.084,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0980, 0.0820, 0.0840]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.055,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0610, 0.0550, 0.0430]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.156,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1550, 0.1560, 0.1800]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 0.85,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8720, 0.8020, 0.8500]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.03,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0290, 0.0300, 0.0330]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0440, 0.0720, 0.0660]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.042,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0430, 0.0420]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.03,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0300, 0.0340]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.05,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0620, 0.0500, 0.0490]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.155,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1550, 0.1530, 0.1550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.378,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3510, 0.3780, 0.3790]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.026,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0190, 0.0280, 0.0260]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.071,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0480, 0.0710, 0.0720]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.04,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0410, 0.0400]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.025,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0250, 0.0240, 0.0260]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0510, 0.0440, 0.0520]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.154,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1540, 0.1520, 0.1550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.359,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3350, 0.3590, 0.3710]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 3.910037,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9100, 4.0806, 3.8603]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.38702,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3785, 0.4011, 0.3870]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 2.89519,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.9950, 2.7364, 2.8952]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 8.539262,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.5580, 8.5393, 8.4607]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 0.789797,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7654, 0.7898, 0.8133]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.263356,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2634, 0.2726, 0.2229]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 2.976988,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.1723, 2.9770, 2.8630]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.411791,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4118, 0.4319, 0.4081]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 2.738835,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.7641, 2.7388, 2.6399]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 7.456213,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.7826, 7.4562, 7.1182]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 0.805833,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8638, 0.8058, 0.7191]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.229462,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2930, 0.2295, 0.2202]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 3.028003,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.0280, 3.0192, 3.6700]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.392748,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3927, 0.4014, 0.3868]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 2.904098,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.0293, 2.9041, 2.7100]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 7.757943,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.7579, 7.6213, 8.0752]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 0.789756,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8137, 0.7858, 0.7898]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.229618,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2235, 0.2296, 0.2550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260414.0270.1"
          }
        ]
      }
    ]
  }
}