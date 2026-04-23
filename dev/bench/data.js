window.BENCHMARK_DATA = {
  "lastUpdate": 1776978914499,
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