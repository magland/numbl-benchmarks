window.BENCHMARK_DATA = {
  "lastUpdate": 1777107114310,
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
          "id": "429574bccd1652165f508dee75861bb616ac78e6",
          "message": "jit: fuse multi-reduction scalar assigns into one pass\n\n`acc = f(sum(x), mean(x), max(x), min(x))` previously emitted four\nindependent passes over the same vector (one `$h.tSum` / `ib_*` helper\ncall per reduction). The new path detects the pattern in the JS\ncodegen and emits a single block with one accumulator per reduction:\n\n- --opt 1: inline JS loop with shared accumulators.\n- --opt e1: specialised C kernel (hash-addressed, cached on $h.$kernels),\n  with JS fallback at small N.\n- --opt e1 --par: parallel-for SIMD with `reduction(+:...)`,\n  `reduction(max:...)`, `reduction(min:...)`, and `reduction(|:...)`\n  for the NaN-omit flag. Gated by `if(n >= NUMBL_OMP_THRESHOLD)`.\n\nMATLAB-compatible NaN-omit for max/min via IEEE unordered compare\n(naturally skips NaN) plus an `any_non_nan` int flag that drives the\nall-NaN → NaN fallback.\n\nBenchmark: tensor_ops_bench.m Reductions kernel (N=2M, trials=50, i7-1355U):\n\n  Mode             Before   After\n  --opt 1          0.30 s   0.14 s  (2.1x)\n  --opt e1         0.29 s   0.10 s  (2.9x)\n  --opt e1 --par   0.29 s   0.03 s  (9.7x)\n\nNote: --par makes the reduction non-deterministic at the FP-rounding\nlevel (parallel tree-combine vs serial left-to-right). Check values\nstill agree to rounding, which matches the benchmark prose.",
          "timestamp": "2026-04-23T19:31:36-04:00",
          "tree_id": "872815ca89d88f43b814a2583860f5d2765d50df",
          "url": "https://github.com/flatironinstitute/numbl/commit/429574bccd1652165f508dee75861bb616ac78e6"
        },
        "date": 1776987608443,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.5106,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5230, 0.5102, 0.5106]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3544,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3544, 0.3571, 0.3537]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.3546,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3546, 0.3539, 0.3558]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.5283,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5283, 0.5266, 0.5295]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0628,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0629, 0.0628, 0.0627]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0626,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0626, 0.0626, 0.0627]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.407,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3990, 0.4120, 0.4070]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.702,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6940, 0.7020, 0.7170]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.3,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2960, 0.3000, 0.3040]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.209,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2080, 0.2090, 0.2100]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 1.486,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4810, 1.4860, 1.4910]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 3.109,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.0780, 3.1090, 3.1290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.055,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0550, 0.0570, 0.0530]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.141,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1420, 0.1410, 0.1410]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.117,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1140, 0.1170, 0.1220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.094,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0940, 0.0950, 0.0940]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 0.984,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9840, 0.9850, 0.9840]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 1.395,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3890, 1.3950, 1.3950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.055,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0550, 0.0540, 0.0570]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.146,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1460, 0.1500, 0.1450]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.122,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1220, 0.1170]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.096,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0960, 0.0960, 0.0960]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.418,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4210, 0.4180, 0.4170]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 0.839,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8420, 0.8390, 0.8330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.537,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5560, 0.5370, 0.5360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 8.244,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.2230, 8.2840, 8.2440]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 9.171,
            "unit": "s",
            "extra": "median of 3/3 runs: [9.1410, 9.2040, 9.1710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.424,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4270, 0.4240, 0.4230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.234,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2310, 0.2340, 0.2350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.076,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0660, 1.0780, 1.0760]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 19.685,
            "unit": "s",
            "extra": "median of 3/3 runs: [19.6450, 19.7610, 19.6850]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.125,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1270, 0.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.39,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3900, 0.3900, 0.3900]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.167,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1690, 0.1670, 0.1660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.132,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1540, 0.1290, 0.1320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.036,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0360, 0.0360, 0.0360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.823,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8230, 0.8300, 0.8220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 1.68,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6970, 1.6800, 1.6710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.125,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1260, 0.1250, 0.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.187,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1890, 0.1840, 0.1870]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.107,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1050, 0.1130, 0.1070]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.067,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0660, 0.0670, 0.0670]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.036,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0380, 0.0350, 0.0360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.315,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3490, 0.3140, 0.3150]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 0.838,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8720, 0.8380, 0.8360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.061,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0610, 0.0620, 0.0610]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 1.656,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6560, 1.7970, 1.5900]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 2.13,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1360, 2.1300, 2.1080]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.06,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0590, 0.0600, 0.0600]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.042,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0420, 0.0420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.13,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1300, 0.1320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 4.081,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0810, 4.2210, 3.9930]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.029,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0290, 0.0280, 0.0290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.05,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0500, 0.0500, 0.0490]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.035,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0350, 0.0370, 0.0340]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.028,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0280, 0.0280, 0.0270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.043,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0430, 0.0430, 0.0420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.124,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1240, 0.1220, 0.1240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.308,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3080, 0.3080, 0.3060]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.029,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0290, 0.0290, 0.0290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.05,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0490, 0.0500, 0.0510]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.035,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0350, 0.0350, 0.0350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.028,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0280, 0.0270, 0.0280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.043,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0410, 0.0430, 0.0440]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.123,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1230, 0.1230, 0.1230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.307,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3050, 0.3070, 0.3110]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.18818,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1262, 4.2037, 4.1882]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.675606,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6890, 0.6705, 0.6756]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 4.030092,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0170, 4.0429, 4.0301]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 10.762741,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.7401, 10.7627, 10.7629]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.239733,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2583, 1.2397, 1.2246]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.262499,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2683, 0.2625, 0.2612]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.1741,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1489, 4.2254, 4.1741]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.668024,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6521, 0.6680, 0.6748]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 3.972629,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0355, 3.9405, 3.9726]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 10.69794,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.7320, 10.6979, 10.6870]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.227125,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2623, 1.2236, 1.2271]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.257186,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2558, 0.2641, 0.2572]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.191853,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1892, 4.2114, 4.1919]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.668411,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6692, 0.6684, 0.6569]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.967353,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0411, 3.9674, 3.9471]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 10.734308,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.8074, 10.7343, 10.6682]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.239404,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2600, 1.2394, 1.2295]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.266644,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2692, 0.2666, 0.2628]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
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
          "id": "8ce11c1464db8b8c9b97200d8954bbace3682449",
          "message": "fix benchmarks.yml",
          "timestamp": "2026-04-23T19:43:04-04:00",
          "tree_id": "88c9a1003319795be790966341c9a88002cfd7a5",
          "url": "https://github.com/flatironinstitute/numbl/commit/8ce11c1464db8b8c9b97200d8954bbace3682449"
        },
        "date": 1776988392503,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.4948,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4948, 0.5180, 0.4925]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3166,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3166, 0.3221, 0.3164]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.3169,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3162, 0.3177, 0.3169]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.5765,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5765, 0.5875, 0.5177]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0642,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0642, 0.0643, 0.0641]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0641,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0641, 0.0639, 0.0642]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.919,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9190, 0.8950, 0.9270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 1.139,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1390, 1.1280, 1.1640]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.515,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5100, 0.5150, 0.5430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.22,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2230, 0.2200, 0.2150]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 2.125,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1510, 2.1250, 2.1190]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 4.942,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.9420, 4.8830, 4.9690]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.115,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1450, 0.1040, 0.1150]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.285,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2850, 0.2880, 0.2850]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.274,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2890, 0.2740, 0.2530]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.117,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1170, 0.1170, 0.1170]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 1.273,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2740, 1.2730, 1.2560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 2.057,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1090, 2.0570, 2.0250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.113,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1060, 0.1380, 0.1130]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.288,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2880, 0.2880, 0.2900]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.247,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2430, 0.2530, 0.2470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.083,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0830, 0.0850, 0.0820]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.392,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3920, 0.3960, 0.3910]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.123,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1110, 1.1590, 1.1230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.804,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8020, 0.8040, 0.8080]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 7.807,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.7720, 7.8070, 7.9630]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 8.63,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.6380, 8.5680, 8.6300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.678,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6780, 0.6820, 0.6730]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.379,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4160, 0.3790, 0.3740]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.476,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4830, 1.4710, 1.4760]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 19.789,
            "unit": "s",
            "extra": "median of 3/3 runs: [19.7890, 19.7090, 19.9240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.291,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2910, 0.2920, 0.2910]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.358,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3580, 0.3580, 0.3580]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.229,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2290, 0.2200, 0.2300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.279,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2790, 0.2740, 0.2790]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.054,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0550, 0.0540, 0.0530]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.762,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7500, 0.7640, 0.7620]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 1.962,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.9620, 1.9610, 1.9730]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.291,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2910, 0.2890, 0.2920]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.182,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1830, 0.1820, 0.1820]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.142,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1440, 0.1310, 0.1420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.108,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1040, 0.1170, 0.1080]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.055,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0550, 0.0530, 0.0580]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.321,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3230, 0.3210, 0.3070]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 1.093,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1000, 1.0930, 1.0890]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.125,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1270, 0.1240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 0.295,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2930, 0.3060, 0.2950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 0.541,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5410, 0.5520, 0.5410]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.126,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1320, 0.1260, 0.1220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.086,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0890, 0.0860, 0.0850]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.115,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1150, 0.1150, 0.1150]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 1.297,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2970, 1.3110, 1.2820]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.062,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0630, 0.0620, 0.0620]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.095,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0930, 0.0950, 0.1070]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.071,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0710, 0.0690, 0.0730]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.061,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0630, 0.0610, 0.0600]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.084,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0840, 0.0840, 0.0840]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.114,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1150, 0.1130, 0.1140]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.489,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4890, 0.4840, 0.5000]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.064,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0700, 0.0640, 0.0620]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.098,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1140, 0.0980, 0.0970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.071,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0820, 0.0710, 0.0710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.062,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0690, 0.0620, 0.0610]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.086,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1030, 0.0840, 0.0860]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.114,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1140, 0.1130, 0.1150]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.492,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5530, 0.4910, 0.4920]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.198417,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1624, 4.2322, 4.1984]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.637805,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6378, 0.6404, 0.6056]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 3.875603,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.8495, 3.8756, 3.9051]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 10.798482,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.7013, 10.8326, 10.7985]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.203867,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1825, 1.2393, 1.2039]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.512643,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5126, 0.4981, 0.5127]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.165044,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1650, 4.2001, 4.1225]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.634529,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6338, 0.6345, 0.6677]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 3.745962,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.7460, 3.8518, 3.6743]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 10.482561,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.4826, 10.7279, 10.3645]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.08213,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0821, 1.2034, 1.0304]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.501653,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5272, 0.5017, 0.5000]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.321977,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1640, 4.3220, 4.3875]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.658471,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6199, 0.6585, 0.6656]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.793682,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.7937, 3.9608, 3.7919]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 10.813703,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.5986, 11.0245, 10.8137]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.162796,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1628, 1.1782, 1.0832]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.521908,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4972, 0.5391, 0.5219]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
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
          "id": "088f752f7e85e2b8a7efcbf9bf9ceb6fc271fce5",
          "message": "jit: add --opt e2 (pure-interpreter outer + per-assign C kernels)\n\nExperimental mode that keeps the AST interpreter in place and compiles\nC kernels on demand for fusible assign chains, trailing/standalone\nreductions, multi-reductions over the same tensor, and pure-scalar\nuser functions. Supports `--par` via OpenMP when the per-element body\nhas heavy transcendentals (reductions use `reduction(...)` clauses\nwhere expressible).\n\nShared heavy-op heuristic between e1 and e2 lives in jit/heavyOps.ts.\nChain and reduction emitters share name mangling, param/koffi list\nbuilders, and the per-element FusedTarget via e2/emitShared.ts.\n\nThreaded through:\n * --dump-c <file> captures every compiled kernel\n * _currentScopeBody / _currentScopeExports for liveness-based\n   decisions (chain-local vs materialized output buffer)\n * _e2ChainAdvance so execStmts skips siblings consumed by a\n   multi-stmt chain kernel",
          "timestamp": "2026-04-24T09:57:22-04:00",
          "tree_id": "d115cffae8f5eb775a96158d3c6a0ce971f683c3",
          "url": "https://github.com/flatironinstitute/numbl/commit/088f752f7e85e2b8a7efcbf9bf9ceb6fc271fce5"
        },
        "date": 1777039683504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.524,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5108, 0.5240, 0.5492]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3562,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3538, 0.3562, 0.3567]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.3541,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3540, 0.3541, 0.3541]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2",
            "value": 0.3544,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3766, 0.3544, 0.3540]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2-par",
            "value": 0.3546,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3547, 0.3546, 0.3543]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.5277,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5277, 0.5329, 0.5248]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0626,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0625, 0.0626, 0.0626]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0627,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0626, 0.0627, 0.0627]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2",
            "value": 0.0628,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0628, 0.0628, 0.0627]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2-par",
            "value": 0.0627,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0627, 0.0627, 0.0628]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.393,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4230, 0.3930, 0.3830]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.703,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7030, 0.7110, 0.6890]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.291,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3090, 0.2910, 0.2890]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.215,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2160, 0.2150, 0.2120]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 1.495,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4950, 1.4830, 1.4970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 3.094,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.1450, 3.0940, 3.0710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.052,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0520, 0.0520, 0.0490]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.16,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1670, 0.1600, 0.1400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.109,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1050, 0.1090, 0.1110]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.094,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0940, 0.0940, 0.0950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 0.979,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9750, 0.9790, 0.9870]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 1.394,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3950, 1.3940, 1.3810]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0510, 0.0510, 0.0500]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.149,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1490, 0.1440, 0.1510]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.108,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1200, 0.1060, 0.1080]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.096,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0960, 0.0960, 0.0950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.418,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4180, 0.4180, 0.4160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 0.819,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8330, 0.8150, 0.8190]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2",
            "value": 0.057,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0550, 0.0580, 0.0570]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2",
            "value": 0.2,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1980, 0.2010, 0.2000]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2",
            "value": 0.202,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2010, 0.2020, 0.2020]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2",
            "value": 0.15,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1500, 0.1500, 0.1490]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2",
            "value": 0.987,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9890, 0.9870, 0.9870]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2",
            "value": 1.595,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5930, 1.5970, 1.5950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2-par",
            "value": 0.058,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0570, 0.0580, 0.0600]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2-par",
            "value": 0.15,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1490, 0.1520, 0.1500]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2-par",
            "value": 0.212,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2120, 0.2030, 0.2300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2-par",
            "value": 0.158,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1570, 0.1580, 0.1580]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2-par",
            "value": 0.425,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4260, 0.4230, 0.4250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2-par",
            "value": 1.001,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0010, 0.9940, 1.0240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.54,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5320, 0.5400, 0.5400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 8.251,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.2940, 8.2320, 8.2510]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 9.259,
            "unit": "s",
            "extra": "median of 3/3 runs: [9.2540, 9.2680, 9.2590]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.426,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4360, 0.4260, 0.4210]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.243,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2430, 0.2380, 0.2560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.094,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0940, 1.0750, 1.1050]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 19.832,
            "unit": "s",
            "extra": "median of 3/3 runs: [19.8520, 19.7780, 19.8320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1270, 0.1270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.388,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3880, 0.3880, 0.3880]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.168,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1670, 0.1680, 0.1760]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.132,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1320, 0.1330, 0.1280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.039,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0340, 0.0390, 0.0400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.826,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8190, 0.8260, 0.8290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 1.681,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6640, 1.6810, 1.6890]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1260, 0.1270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.186,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1860, 0.1850, 0.1860]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.109,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1090, 0.1110, 0.1090]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0660, 0.0670, 0.0660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.041,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0410, 0.0390, 0.0420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.32,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3200, 0.3150, 0.3200]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 0.848,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8480, 0.8430, 0.8490]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2",
            "value": 0.13,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1290, 0.1540, 0.1300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2",
            "value": 0.394,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3990, 0.3940, 0.3930]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2",
            "value": 0.14,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1410, 0.1400, 0.1370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2",
            "value": 0.139,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1390, 0.1360, 0.1400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2",
            "value": 0.04,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0390, 0.0400, 0.0400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2",
            "value": 0.832,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8320, 0.8280, 0.8320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2",
            "value": 1.679,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6790, 1.6920, 1.6710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2-par",
            "value": 0.068,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0690, 0.0680, 0.0680]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2-par",
            "value": 0.189,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1900, 0.1880, 0.1890]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2-par",
            "value": 0.072,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0720, 0.0730, 0.0720]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2-par",
            "value": 0.079,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0720, 0.0790, 0.1470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2-par",
            "value": 0.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0370, 0.0360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2-par",
            "value": 0.321,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3520, 0.3210, 0.3210]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2-par",
            "value": 0.797,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7970, 0.7660, 0.8330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.055,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0520, 0.0550, 0.0600]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 1.964,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6560, 1.9640, 2.0520]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 2.244,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.2440, 2.2020, 2.3350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.052,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0520, 0.0480, 0.0650]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.034,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0340, 0.0320, 0.0390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.129,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1290, 0.1270, 0.1310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 4.428,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1660, 4.4280, 4.6830]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.029,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0280, 0.0290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.049,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0490, 0.0520]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.035,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0340, 0.0360, 0.0350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.028,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0250, 0.0280, 0.0280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.043,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0360, 0.0440, 0.0430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.124,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1240, 0.1240, 0.1240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.308,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2910, 0.3080, 0.3100]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.022,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0220, 0.0220, 0.0220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.04,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0400, 0.0390, 0.0400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.027,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0270, 0.0270, 0.0280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.021,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0210, 0.0220, 0.0210]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.034,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0340, 0.0340, 0.0330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.123,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1230, 0.1260, 0.1220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.266,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2660, 0.2700, 0.2660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2",
            "value": 0.178,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1420, 0.1780, 0.2020]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2",
            "value": 2.091,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0910, 2.1260, 2.0470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2",
            "value": 2.57,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.5130, 2.5700, 2.6120]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2",
            "value": 0.149,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1400, 0.1490, 0.1730]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2",
            "value": 0.082,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0730, 0.0980, 0.0820]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2",
            "value": 0.131,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0980, 0.1350, 0.1310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2",
            "value": 5.248,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.0580, 5.2570, 5.2480]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2-par",
            "value": 0.214,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2140, 0.2060, 0.2170]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2-par",
            "value": 2.17,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.2950, 2.1700, 2.1370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2-par",
            "value": 2.661,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.6860, 2.6610, 2.5690]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2-par",
            "value": 0.174,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1740, 0.1740, 0.1470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2-par",
            "value": 0.093,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0930, 0.1080, 0.0620]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2-par",
            "value": 0.111,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1330, 0.0890, 0.1110]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2-par",
            "value": 5.407,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.5950, 5.4070, 5.2440]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.364497,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.2905, 4.4307, 4.3645]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.70159,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7811, 0.6921, 0.7016]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 4.108305,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9978, 4.1083, 4.1197]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 11.200171,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.9700, 11.2002, 11.2167]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.284384,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1934, 1.2844, 1.3057]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.302994,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3030, 0.3000, 0.3320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.405439,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.3866, 4.4532, 4.4054]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.691283,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6872, 0.6913, 0.6942]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 4.168545,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1685, 4.1084, 4.1771]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 11.213775,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.2021, 11.2138, 11.2665]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.272824,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2728, 1.2593, 1.2943]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.30407,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3041, 0.3189, 0.2984]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.410643,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.4106, 4.3400, 4.4314]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.696818,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7002, 0.6968, 0.6932]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 4.084677,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0847, 4.0473, 4.1698]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 11.176658,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.1767, 11.0430, 11.2846]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.291152,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2912, 1.2788, 1.2982]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.309856,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3099, 0.2921, 0.3114]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2",
            "value": 2.590395,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.5915, 2.5904, 2.5737]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2",
            "value": 1.498621,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4818, 1.5018, 1.4986]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2",
            "value": 0.03471,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0347, 0.0340, 0.0359]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2-par",
            "value": 2.584007,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.6291, 2.5840, 2.5749]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2-par",
            "value": 1.457619,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4576, 1.4938, 1.4407]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2-par",
            "value": 0.033729,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0337, 0.0420, 0.0337]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
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
          "id": "47f450949a4e30b2728e5ad2e90e6e463dde91dc",
          "message": "ci: gate e2 smoke on NUMBL_CJIT_E2E, run in e1 job\n\nThe main Test job doesn't build the native addon, but the e2 smoke\ntests unconditionally attempted to compile kernels and link against\nlibnumbl_ops.a — same issue the e1 smoke tests solved with an opt-in\nenv var. Match that pattern: skip unless NUMBL_CJIT_E2E=1.\n\nThe dedicated \"Test --opt e1 / e2\" job (which does build the addon)\nnow runs e2 integration tests + e2 smoke tests alongside the e1 ones.",
          "timestamp": "2026-04-24T10:05:44-04:00",
          "tree_id": "902deb161265dc52e3604a97f0a92ccb43734414",
          "url": "https://github.com/flatironinstitute/numbl/commit/47f450949a4e30b2728e5ad2e90e6e463dde91dc"
        },
        "date": 1777040408515,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.5115,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5115, 0.5103, 0.5122]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3541,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3541, 0.3627, 0.3540]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.3542,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3542, 0.3542, 0.3559]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2",
            "value": 0.3556,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3646, 0.3541, 0.3556]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2-par",
            "value": 0.3545,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3543, 0.3547, 0.3545]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.536,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5360, 0.5429, 0.5314]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0628,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0628, 0.0628, 0.0627]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0627,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0627, 0.0626, 0.0629]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2",
            "value": 0.063,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0630, 0.0631, 0.0629]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2-par",
            "value": 0.063,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0631, 0.0630, 0.0628]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.443,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4540, 0.4430, 0.4370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.722,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7200, 0.7220, 0.7350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.322,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3220, 0.3160, 0.3220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.213,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2090, 0.2130, 0.2130]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 1.543,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5380, 1.5490, 1.5430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 3.243,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.2420, 3.2430, 3.2490]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.06,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0600, 0.0600, 0.0610]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.148,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1490, 0.1410, 0.1480]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.13,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1210, 0.1300, 0.1310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.095,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0940, 0.0950, 0.0950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 0.986,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9940, 0.9860, 0.9790]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 1.413,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4180, 1.4120, 1.4130]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.057,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0600, 0.0570, 0.0550]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.145,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1450, 0.1450, 0.1450]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.136,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1310, 0.1380, 0.1360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.096,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0950, 0.0960, 0.0960]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.418,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4170, 0.4250, 0.4180]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 0.849,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8480, 0.8600, 0.8490]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0730, 0.0660, 0.0620]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2",
            "value": 0.208,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2080, 0.2070, 0.2170]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2",
            "value": 0.215,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2150, 0.2100, 0.2240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2",
            "value": 0.155,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1550, 0.1520, 0.1550]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2",
            "value": 0.987,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9870, 0.9870, 0.9870]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2",
            "value": 1.638,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6380, 1.6220, 1.6450]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2-par",
            "value": 0.067,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0710, 0.0670, 0.0640]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2-par",
            "value": 0.147,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1520, 0.1440, 0.1470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2-par",
            "value": 0.197,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2260, 0.1960, 0.1970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2-par",
            "value": 0.157,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1550, 0.1570, 0.1570]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2-par",
            "value": 0.424,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4280, 0.4230, 0.4240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2-par",
            "value": 0.989,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0330, 0.9870, 0.9890]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.544,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5440, 0.5420, 0.5530]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 8.311,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.3110, 8.4880, 8.3030]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 9.216,
            "unit": "s",
            "extra": "median of 3/3 runs: [9.2520, 9.1920, 9.2160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.432,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4300, 0.4400, 0.4320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.255,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2470, 0.2560, 0.2550]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.108,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1040, 1.1160, 1.1080]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 19.889,
            "unit": "s",
            "extra": "median of 3/3 runs: [19.8890, 20.0340, 19.8690]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1270, 0.1350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.39,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3900, 0.3900, 0.3900]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.175,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1760, 0.1710, 0.1750]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.129,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1290, 0.1280, 0.1320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.039,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0380, 0.0420, 0.0390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.829,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8290, 0.8290, 0.8230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 1.689,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6890, 1.6870, 1.6940]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1250, 0.1280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.185,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1850, 0.1850, 0.1870]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.111,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1110, 0.1110, 0.1120]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0660, 0.0670, 0.0660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.041,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0380, 0.0410]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.317,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3170, 0.3140, 0.3510]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 0.848,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8480, 0.8410, 0.8850]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2",
            "value": 0.129,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1290, 0.1290, 0.1280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2",
            "value": 0.393,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3930, 0.3950, 0.3930]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2",
            "value": 0.139,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1390, 0.1410, 0.1370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2",
            "value": 0.139,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1340, 0.1400, 0.1390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2",
            "value": 0.041,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0430, 0.0410, 0.0380]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2",
            "value": 0.836,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8380, 0.8290, 0.8360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2",
            "value": 1.675,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6770, 1.6750, 1.6720]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2-par",
            "value": 0.068,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0680, 0.0680, 0.0680]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2-par",
            "value": 0.19,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2110, 0.1890, 0.1900]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2-par",
            "value": 0.072,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0720, 0.0720, 0.0720]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2-par",
            "value": 0.072,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0720, 0.0760, 0.0720]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2-par",
            "value": 0.042,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0400, 0.0430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2-par",
            "value": 0.322,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3240, 0.3210, 0.3220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2-par",
            "value": 0.767,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7900, 0.7650, 0.7670]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.06,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0550, 0.0670, 0.0600]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 1.982,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.9160, 1.9820, 2.0250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 2.278,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.2770, 2.2780, 2.3430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.063,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0510, 0.0660, 0.0630]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.045,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0340, 0.0470, 0.0450]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1290, 0.1260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 4.569,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.4600, 4.5690, 4.6620]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.03,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0310, 0.0300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.054,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0490, 0.0540, 0.0540]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0320, 0.0370, 0.0380]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.028,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0280, 0.0280, 0.0290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.045,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0410, 0.0460, 0.0450]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.123,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1230, 0.1240, 0.1230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.319,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3030, 0.3190, 0.3190]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.03,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0300, 0.0340]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.053,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0530, 0.0530, 0.0590]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.036,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0360, 0.0360, 0.0420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.029,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0290, 0.0290, 0.0340]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.043,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0450, 0.0430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.124,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1240, 0.1240, 0.1240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.317,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3150, 0.3170, 0.3350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2",
            "value": 0.202,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2020, 0.2120, 0.2020]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2",
            "value": 2.099,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1630, 2.0980, 2.0990]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2",
            "value": 2.604,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.5750, 2.6040, 2.6370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2",
            "value": 0.177,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1770, 0.1550, 0.1850]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2",
            "value": 0.071,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0750, 0.0700, 0.0710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2",
            "value": 0.118,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1260, 0.1150, 0.1180]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2",
            "value": 5.312,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.3170, 5.2550, 5.3120]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2-par",
            "value": 0.197,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2060, 0.1970, 0.1840]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2-par",
            "value": 2.13,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1690, 2.1300, 2.1210]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2-par",
            "value": 2.613,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.6340, 2.6130, 2.6050]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2-par",
            "value": 0.173,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1730, 0.1610, 0.1770]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2-par",
            "value": 0.091,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0540, 0.0910, 0.1010]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2-par",
            "value": 0.13,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0830, 0.1360, 0.1300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2-par",
            "value": 5.319,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.3190, 5.3280, 5.3180]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.320691,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.3406, 4.3207, 4.2422]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.694941,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6908, 0.6949, 0.7536]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 4.122172,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1644, 4.1222, 4.0423]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 11.082973,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.1591, 11.0830, 10.8582]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.260896,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2913, 1.2609, 1.1473]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.289186,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2884, 0.2900, 0.2892]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.373589,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.3736, 4.3629, 4.3780]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.690912,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6746, 0.6909, 0.7209]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 4.055124,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0663, 4.0551, 3.9555]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 11.039253,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.0393, 11.0589, 10.9164]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.239373,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2394, 1.2493, 1.1752]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.301173,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2973, 0.3050, 0.3012]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.347503,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.3353, 4.3475, 4.3650]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.692653,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6927, 0.6799, 0.7008]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 4.078267,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0554, 4.0783, 4.1280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 11.076978,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.0189, 11.0770, 11.1308]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.265445,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2654, 1.2743, 1.2648]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.29668,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2823, 0.3048, 0.2967]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2",
            "value": 2.538185,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.5382, 2.4832, 2.5402]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2",
            "value": 1.469752,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4705, 1.4698, 1.4326]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2",
            "value": 0.035224,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0352, 0.0349, 0.0358]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2-par",
            "value": 2.534873,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.5231, 2.5484, 2.5349]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2-par",
            "value": 1.474658,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4747, 1.4770, 1.4672]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2-par",
            "value": 0.034894,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0335, 0.0360, 0.0349]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
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
          "id": "401530b6d27922e0423d7ff1343b04311115e48d",
          "message": "e2: add paired-buffer complex tensor codegen\n\nExtends --opt e2 with paired-buffer (re/im) kernel emission for complex\ntensor chains, mirroring e1's complexKernelEmit.ts. On the complex\ntensor benchmark, fused kernels (1-4) now match or beat --opt e1: total\nof fused kernels drops from 1.45s to 0.33s, roughly matching e1's 0.34s.\n\nPer-op kernels (z./w, abs+sum) still bail to the interpreter; closing\nthat gap is orthogonal to codegen and left for a follow-up.",
          "timestamp": "2026-04-24T11:03:04-04:00",
          "tree_id": "519b251a2793f105a9a034390fb7dd36c03ca390",
          "url": "https://github.com/flatironinstitute/numbl/commit/401530b6d27922e0423d7ff1343b04311115e48d"
        },
        "date": 1777043633825,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.511,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5110, 0.5110, 0.5122]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.355,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3550, 0.3545, 0.3559]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.354,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3539, 0.3540, 0.3549]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2",
            "value": 0.3544,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3550, 0.3544, 0.3539]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2-par",
            "value": 0.3544,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3550, 0.3538, 0.3544]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.5351,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5694, 0.5351, 0.5332]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0628,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0629, 0.0628, 0.0627]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0626,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0626, 0.0626, 0.0627]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2",
            "value": 0.0629,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0628, 0.0629, 0.0629]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2-par",
            "value": 0.0629,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0627, 0.0629, 0.0630]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.534,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3980, 0.5340, 0.6770]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.768,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7680, 0.7750, 0.7180]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.317,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3070, 0.3910, 0.3170]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.21,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2090, 0.2100, 0.2140]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 1.531,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4890, 1.7110, 1.5310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 3.456,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.1710, 3.6200, 3.4560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.059,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0710, 0.0590, 0.0540]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.147,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1480, 0.1470, 0.1400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.167,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1370, 0.1860, 0.1670]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.094,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0940, 0.0940, 0.0970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 0.985,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9890, 0.9780, 0.9850]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 1.444,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4380, 1.4640, 1.4440]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.056,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0560, 0.0560, 0.0940]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.15,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1510, 0.1500, 0.1440]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.133,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1330, 0.1390, 0.1280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.095,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0970, 0.0950, 0.0950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.418,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4180, 0.4180, 0.4200]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 0.859,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8540, 0.8590, 0.8810]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2",
            "value": 0.065,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0670, 0.0640, 0.0650]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2",
            "value": 0.21,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2100, 0.2370, 0.2100]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2",
            "value": 0.248,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2480, 0.2680, 0.2160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2",
            "value": 0.154,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1540, 0.1510, 0.1550]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2",
            "value": 0.992,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0110, 0.9920, 0.9920]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2",
            "value": 1.69,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6900, 1.7120, 1.6380]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2-par",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0760, 0.0660, 0.0630]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2-par",
            "value": 0.146,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1600, 0.1430, 0.1460]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2-par",
            "value": 0.21,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2220, 0.2090, 0.2100]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2-par",
            "value": 0.154,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1600, 0.1530, 0.1540]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2-par",
            "value": 0.426,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4260, 0.4360, 0.4250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2-par",
            "value": 1.007,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0430, 1.0070, 0.9990]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.549,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5490, 0.5490, 0.5530]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 8.347,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.2990, 8.3470, 8.4160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 9.33,
            "unit": "s",
            "extra": "median of 3/3 runs: [9.3300, 9.3690, 9.3030]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.433,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4240, 0.4620, 0.4330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.258,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2580, 0.2490, 0.2760]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.183,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1440, 1.2610, 1.1830]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 20.165,
            "unit": "s",
            "extra": "median of 3/3 runs: [20.0040, 20.2370, 20.1650]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.126,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1260, 0.1330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.391,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3910, 0.3920, 0.3900]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.173,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1700, 0.1730, 0.1750]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.132,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1320, 0.1350, 0.1320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0350, 0.0570, 0.0370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.821,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8240, 0.8210, 0.8210]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 1.688,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6770, 1.7040, 1.6880]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.125,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1250, 0.1260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.186,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1860, 0.1850, 0.1860]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.114,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1260, 0.1090, 0.1140]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0670, 0.0660, 0.0660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.041,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0520, 0.0400, 0.0410]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.317,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3170, 0.3170, 0.3180]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 0.852,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8730, 0.8420, 0.8520]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2",
            "value": 0.131,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1310, 0.1310, 0.1290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2",
            "value": 0.397,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4000, 0.3970, 0.3940]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2",
            "value": 0.139,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1450, 0.1370, 0.1390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2",
            "value": 0.135,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1340, 0.1360, 0.1350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2",
            "value": 0.039,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0390, 0.0520, 0.0390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2",
            "value": 0.835,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8350, 0.8340, 0.8360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2",
            "value": 1.683,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6830, 1.6870, 1.6730]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2-par",
            "value": 0.069,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0680, 0.0690, 0.0690]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2-par",
            "value": 0.189,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1890, 0.1890, 0.1920]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2-par",
            "value": 0.074,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0730, 0.0750, 0.0740]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2-par",
            "value": 0.078,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0720, 0.0780, 0.0830]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2-par",
            "value": 0.045,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0600, 0.0450, 0.0400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2-par",
            "value": 0.33,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3330, 0.3300, 0.3250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2-par",
            "value": 0.785,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7940, 0.7850, 0.7820]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0540, 0.0690, 0.0660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 1.903,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.9000, 1.9440, 1.9030]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 2.345,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.3340, 2.5690, 2.3450]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.062,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0490, 0.0620, 0.0640]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.044,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0320, 0.0440, 0.0460]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.128,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1280, 0.1270, 0.1340]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 4.558,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.4970, 4.8160, 4.5580]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.027,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0270, 0.0260, 0.0300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.041,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0410, 0.0390, 0.0550]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.027,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0270, 0.0260, 0.0370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.021,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0210, 0.0210, 0.0280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.033,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0330, 0.0330, 0.0460]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.123,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1230, 0.1240, 0.1230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.273,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2730, 0.2680, 0.3190]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.027,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0250, 0.0300, 0.0270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.04,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0380, 0.0520, 0.0400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.027,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0260, 0.0360, 0.0270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.021,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0200, 0.0290, 0.0210]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.033,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0320, 0.0460, 0.0330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.125,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1230, 0.1260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.274,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2650, 0.3170, 0.2740]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2",
            "value": 0.035,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0350, 0.0350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2",
            "value": 0.056,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0590, 0.0560, 0.0490]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2",
            "value": 0.04,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0400, 0.0410, 0.0320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2",
            "value": 0.032,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0320, 0.0330, 0.0240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2",
            "value": 0.113,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1300, 0.1120, 0.1130]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2",
            "value": 0.126,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1200, 0.1260, 0.1360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2",
            "value": 0.403,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4180, 0.4030, 0.3890]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2-par",
            "value": 0.03,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0300, 0.0370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2-par",
            "value": 0.046,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0460, 0.0450, 0.0570]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2-par",
            "value": 0.031,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0310, 0.0310, 0.0390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2-par",
            "value": 0.025,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0240, 0.0250, 0.0320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2-par",
            "value": 0.107,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1300, 0.1070, 0.0860]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2-par",
            "value": 0.129,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1340, 0.1290, 0.1150]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2-par",
            "value": 0.366,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3950, 0.3660, 0.3660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.271744,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.2717, 4.2394, 4.3062]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.720245,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7202, 0.7238, 0.7112]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 3.962952,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1502, 3.9452, 3.9630]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 10.830465,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.0771, 10.7104, 10.8305]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.12616,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2638, 1.1262, 1.1165]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.293953,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2940, 0.2847, 0.3282]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.369797,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.3698, 4.3992, 4.2878]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.725084,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7251, 0.7072, 0.7310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 4.129693,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1297, 4.0829, 4.1599]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 11.16373,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.2529, 11.1170, 11.1637]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.263348,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2839, 1.2515, 1.2633]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.34543,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3549, 0.3040, 0.3454]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.386909,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.4106, 4.3517, 4.3869]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.70121,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6881, 0.7012, 0.7329]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 4.080289,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0803, 4.1023, 3.9519]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 11.152046,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.1627, 11.1520, 11.0125]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.261483,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2615, 1.2690, 1.1431]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.332391,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3299, 0.3324, 0.4038]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2",
            "value": 2.609585,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.6842, 2.5761, 2.6096]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2",
            "value": 1.445288,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4212, 1.4698, 1.4453]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2",
            "value": 0.035389,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0347, 0.0354, 0.0385]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2-par",
            "value": 2.583198,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.5832, 2.5616, 2.6163]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2-par",
            "value": 1.464156,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4541, 1.4660, 1.4642]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2-par",
            "value": 0.034242,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0330, 0.0342, 0.0373]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
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
          "id": "a3231a35b377f65a4776647569e4dfeb4899e714",
          "message": "e2: fix _isLogical propagation and NaN self-comparison under -ffast-math\n\nTwo bugs in the e2 per-assign C kernel path:\n\n1. Comparison ops (>, <, ==, ~=, <=, >=) and unary ~ produced the correct\n   0/1 Float64Array values but did not set _isLogical on the output\n   RuntimeTensor. Downstream logical indexing (pts(:, mask)) then treated\n   the tensor as double indices instead of a boolean mask, failing with\n   \"Index exceeds array bounds\". Fix: unifyBinaryType now returns\n   isLogical:true for comparison ops; unary ~ on a tensor also propagates\n   isLogical:true; assignKernel.ts stamps _isLogical:true on escape LHS\n   tensors whose envTypes entry is logical.\n\n2. x ~= x (the standard MATLAB NaN-detection idiom) compiled to a C kernel\n   containing `in_x[i] != in_x[i]`, which -ffinite-math-only (implied by\n   -ffast-math) constant-folds to 0 — so NaN elements were never detected.\n   Fix: emitShared.ts defines E2_C_PROLOGUE (adds a memcpy-based\n   numbl_is_nan_fp helper opaque to the optimiser) and E2_C_SCALAR_TARGET\n   (uses the helper when both operand strings are identical). Chain and\n   reduction emitters now use both.\n\nTests added: e2_logical_index.m, e2_nan_self_comparison.m.",
          "timestamp": "2026-04-24T11:42:36-04:00",
          "tree_id": "9a6fe456ea09a49e6ce33e135e007630498bb089",
          "url": "https://github.com/flatironinstitute/numbl/commit/a3231a35b377f65a4776647569e4dfeb4899e714"
        },
        "date": 1777046090606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.4898,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4899, 0.4898, 0.4888]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3717,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3710, 0.3825, 0.3717]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.3708,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3708, 0.3719, 0.3708]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2",
            "value": 0.3712,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3712, 0.3711, 0.3718]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2-par",
            "value": 0.3719,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3738, 0.3718, 0.3719]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.4959,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4935, 0.4965, 0.4959]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0705,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0705, 0.0707, 0.0704]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0703,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0704, 0.0703, 0.0703]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2",
            "value": 0.0706,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0706, 0.0705, 0.0706]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2-par",
            "value": 0.0705,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0706, 0.0705, 0.0704]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.375,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3890, 0.3750, 0.3740]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.69,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6860, 0.6900, 0.6950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.293,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2930, 0.2890, 0.2950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.207,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2050, 0.2080, 0.2070]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 1.386,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3860, 1.3860, 1.4020]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 2.959,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.9590, 2.9470, 2.9730]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.058,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0580, 0.0590, 0.0580]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.14,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1410, 0.1400, 0.1400]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.112,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1120, 0.1110, 0.1190]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.106,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1060, 0.1060, 0.1070]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 1.046,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0390, 1.0460, 1.0550]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 1.462,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4560, 1.4620, 1.4780]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.061,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0610, 0.0600, 0.0620]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.143,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1430, 0.1430, 0.1430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.122,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1190, 0.1240, 0.1220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.107,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1070, 0.1070, 0.1130]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.426,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4250, 0.4260, 0.4290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 0.86,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8550, 0.8600, 0.8690]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2",
            "value": 0.067,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0690, 0.0670, 0.0660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2",
            "value": 0.197,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1970, 0.1900, 0.1980]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2",
            "value": 0.213,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2130, 0.2030, 0.2160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2",
            "value": 0.17,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1700, 0.1700, 0.1710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2",
            "value": 1.057,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0630, 1.0500, 1.0570]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2",
            "value": 1.709,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.7130, 1.6800, 1.7090]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2-par",
            "value": 0.063,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0640, 0.0620, 0.0630]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2-par",
            "value": 0.144,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1520, 0.1350, 0.1440]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2-par",
            "value": 0.195,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2240, 0.1720, 0.1950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2-par",
            "value": 0.173,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1820, 0.1720, 0.1730]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2-par",
            "value": 0.433,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4330, 0.4440, 0.4320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2-par",
            "value": 1.006,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0560, 0.9850, 1.0060]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.533,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5330, 0.5350, 0.5320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 7.612,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.5970, 7.6190, 7.6120]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 8.878,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.8590, 9.0130, 8.8780]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.423,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4230, 0.4290, 0.4230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.229,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2330, 0.2290, 0.2280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.007,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0010, 1.0070, 1.0230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 18.695,
            "unit": "s",
            "extra": "median of 3/3 runs: [18.6450, 18.8320, 18.6950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.125,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1250, 0.1250, 0.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.369,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3680, 0.3740, 0.3690]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.16,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1590, 0.1610, 0.1600]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.13,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1300, 0.1300, 0.1300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.036,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0360, 0.0360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.839,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8500, 0.8390, 0.8390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 1.665,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6690, 1.6650, 1.6590]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
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
            "extra": "median of 3/3 runs: [0.1780, 0.1760, 0.1760]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.103,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1020, 0.1080, 0.1030]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.068,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0680, 0.0680, 0.0690]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0380, 0.0360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.372,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3760, 0.3720, 0.3720]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 0.886,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8860, 0.8860, 0.8810]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1270, 0.1270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2",
            "value": 0.413,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3780, 0.4140, 0.4130]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2",
            "value": 0.143,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1410, 0.1450, 0.1430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2",
            "value": 0.132,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1330, 0.1320, 0.1310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2",
            "value": 0.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0360, 0.0380]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2",
            "value": 0.893,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8930, 0.8950, 0.8900]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2",
            "value": 1.742,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.7080, 1.7490, 1.7420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2-par",
            "value": 0.071,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0710, 0.0710, 0.0710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2-par",
            "value": 0.201,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2040, 0.2010, 0.1800]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2-par",
            "value": 0.073,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0740, 0.0730, 0.0730]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2-par",
            "value": 0.074,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0740, 0.0740, 0.0740]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2-par",
            "value": 0.035,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0380, 0.0350, 0.0330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2-par",
            "value": 0.385,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3850, 0.3790, 0.3970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2-par",
            "value": 0.833,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8460, 0.8330, 0.8270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.058,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0580, 0.0560, 0.0720]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 1.406,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4060, 1.4610, 1.3930]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 1.558,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6000, 1.5430, 1.5580]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.054,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0570, 0.0540, 0.0540]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.041,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0410, 0.0440, 0.0390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.128,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1280, 0.1300, 0.1260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 3.289,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.2900, 3.2890, 3.2420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.026,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0250, 0.0260, 0.0260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.049,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0490, 0.0490, 0.0510]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.03,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0300, 0.0310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.024,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0240, 0.0240, 0.0250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.041,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0410, 0.0410, 0.0410]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.122,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1220, 0.1220, 0.1220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.292,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2910, 0.2920, 0.2940]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.026,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0250, 0.0270, 0.0260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.05,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0500, 0.0480, 0.0510]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.03,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0300, 0.0330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.025,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0240, 0.0250, 0.0300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.041,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0410, 0.0400, 0.0420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.122,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1220, 0.1190, 0.1350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.293,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2930, 0.2890, 0.3170]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2",
            "value": 0.031,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0310, 0.0370, 0.0310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2",
            "value": 0.055,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0540, 0.0550, 0.0560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2",
            "value": 0.033,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0330, 0.0350, 0.0330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2",
            "value": 0.027,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0270, 0.0290, 0.0270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2",
            "value": 0.109,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1110, 0.0830, 0.1090]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2",
            "value": 0.12,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1200, 0.1130, 0.1270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2",
            "value": 0.377,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3770, 0.3520, 0.3830]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2-par",
            "value": 0.031,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0330, 0.0310, 0.0310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2-par",
            "value": 0.053,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0520, 0.0530, 0.0560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2-par",
            "value": 0.034,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0340, 0.0330, 0.0340]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2-par",
            "value": 0.027,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0270, 0.0270, 0.0280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2-par",
            "value": 0.116,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1170, 0.1100, 0.1160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2-par",
            "value": 0.12,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1210, 0.1200, 0.0920]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2-par",
            "value": 0.374,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3830, 0.3740, 0.3560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 3.957517,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9624, 3.9435, 3.9575]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.637183,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6464, 0.6372, 0.6313]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 3.880678,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.8807, 3.8954, 3.8647]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 10.256889,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.2569, 10.3020, 10.1909]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.14963,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1496, 1.1731, 1.1398]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.269641,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2696, 0.2754, 0.2641]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 3.934764,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9663, 3.9067, 3.9348]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.633141,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6579, 0.6235, 0.6331]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 3.809916,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.8059, 3.8962, 3.8099]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 10.085983,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.0860, 10.1917, 10.0079]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.051686,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0517, 1.1613, 1.0319]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.265477,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2675, 0.2628, 0.2655]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 3.960485,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0308, 3.9605, 3.9554]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.632593,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6370, 0.6163, 0.6326]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.96106,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9877, 3.9248, 3.9611]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 10.31073,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.4400, 10.2857, 10.3107]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.177767,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1785, 1.1778, 1.1578]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.267101,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2704, 0.2671, 0.2657]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2",
            "value": 6.005756,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.0090, 5.9463, 6.0058]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2",
            "value": 1.402084,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3963, 1.4021, 1.4137]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e2",
            "value": 15.223537,
            "unit": "s",
            "extra": "median of 3/3 runs: [15.2235, 15.1801, 15.2521]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e2",
            "value": 27.245778,
            "unit": "s",
            "extra": "median of 3/3 runs: [27.2458, 27.2291, 27.2746]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e2",
            "value": 3.988874,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9889, 4.0758, 3.9653]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2",
            "value": 0.268339,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2683, 0.2681, 0.2896]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2-par",
            "value": 5.959533,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.9595, 6.1340, 5.9208]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2-par",
            "value": 1.39317,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3750, 1.4028, 1.3932]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e2-par",
            "value": 15.206843,
            "unit": "s",
            "extra": "median of 3/3 runs: [15.2068, 15.2032, 15.2628]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e2-par",
            "value": 27.236093,
            "unit": "s",
            "extra": "median of 3/3 runs: [27.1330, 27.3370, 27.2361]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e2-par",
            "value": 4.011686,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9649, 4.0117, 4.0430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2-par",
            "value": 0.270222,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2702, 0.2603, 0.2764]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 9V74 80-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
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
          "id": "b0de4ac63df87962cd1ccf1f2ca8419b205e3245",
          "message": "e2: whole-loop C JIT for tight numerical for-loops\n\nCompile `for varName = lo:hi <body> end` to a single C kernel under\n--opt e2 when the body fits a supported shape (scalar assigns, scalar\nindexed tensor reads/writes, elemwise tensor_locals, and sum() reductions\nthat fuse through chained tensor_locals without materialization).\n\nCloses the ~70-100 ns/iter interpreter-dispatch gap: on the benchmarks\nunder benchmarks/loop_jit/, numbl ties or beats MATLAB on every shape\n(1.04x to 5.9x depending on body complexity).\n\nCorrectness:\n- Tensor_locals materialize their last-iteration value to a caller-\n  allocated buffer (guarded if(__iv == hi)) and get written back to env\n  so MATLAB post-loop visibility is preserved.\n- Bails on cross-iter deps (tensor input reassigned in body, duplicate\n  tensor_local writes, tensor_local elemExpr referencing a later-declared\n  tensor_local).\n- tensorInoutVars are unshared before the kernel mutates them, so\n  function-parameter COW semantics work when the caller's tensor is\n  shared.\n\nStructure:\n- loopKernel.ts: driver (validation, lowering, classification, marshal).\n- loopKernelEmit.ts: C source emission, following the chainKernelEmit.ts\n  pattern.\n- astToJitExpr.ts gains an Index case and an opt-in\n  resolveFuncCallAsTensorIndex lower option for MATLAB's `x(i)` tensor-\n  index syntax (which parses as FuncCall).\n- fusedScalarEmit.ts gains an optional tensorScalarIndexRead on\n  FusedTarget + an Index case.",
          "timestamp": "2026-04-24T14:36:09-04:00",
          "tree_id": "5c934d29bef6defd54b1b8647383626fbdbe06d9",
          "url": "https://github.com/flatironinstitute/numbl/commit/b0de4ac63df87962cd1ccf1f2ca8419b205e3245"
        },
        "date": 1777056739052,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.5102,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5117, 0.5099, 0.5102]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3567,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3543, 0.3567, 0.3583]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.3541,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3542, 0.3541, 0.3538]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2",
            "value": 0.3555,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3556, 0.3544, 0.3555]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2-par",
            "value": 0.3541,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3545, 0.3539, 0.3541]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.5301,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5320, 0.5301, 0.5275]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0629,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0627, 0.0631, 0.0629]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0625,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0625, 0.0625, 0.0628]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2",
            "value": 0.0631,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0634, 0.0627, 0.0631]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2-par",
            "value": 0.0629,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0629, 0.0628, 0.0631]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.419,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4320, 0.4150, 0.4190]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.712,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7490, 0.7120, 0.7040]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.315,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3150, 0.3170, 0.3040]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.21,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2100, 0.2070, 0.2140]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 1.506,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5580, 1.4950, 1.5060]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 3.147,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.2630, 3.1450, 3.1470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.053,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0530, 0.0530, 0.0560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.141,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1410, 0.1410, 0.1470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.121,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1210, 0.1240, 0.1200]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.094,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0950, 0.0940, 0.0940]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 0.984,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9840, 0.9860, 0.9780]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 1.395,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3950, 1.3980, 1.3950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.056,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0580, 0.0560, 0.0550]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.152,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1530, 0.1450, 0.1520]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.124,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1170, 0.1240, 0.1330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.096,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0950, 0.0960, 0.0960]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.418,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4190, 0.4160, 0.4180]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 0.842,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8420, 0.8360, 0.8540]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0670, 0.0660, 0.0660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2",
            "value": 0.203,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2060, 0.2010, 0.2030]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2",
            "value": 0.209,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2120, 0.2080, 0.2090]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2",
            "value": 0.156,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1590, 0.1560, 0.1550]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2",
            "value": 0.994,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9920, 0.9940, 0.9950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2",
            "value": 1.627,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6370, 1.6250, 1.6270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2-par",
            "value": 0.062,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0640, 0.0620, 0.0610]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2-par",
            "value": 0.154,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1530, 0.1540, 0.1610]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2-par",
            "value": 0.207,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2110, 0.2040, 0.2070]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2-par",
            "value": 0.17,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1700, 0.1620, 0.1710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2-par",
            "value": 0.425,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4260, 0.4250, 0.4250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2-par",
            "value": 1.025,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0250, 1.0070, 1.0250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.537,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5400, 0.5360, 0.5370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 8.247,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.2470, 8.2620, 8.2350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 9.242,
            "unit": "s",
            "extra": "median of 3/3 runs: [9.3000, 9.2170, 9.2420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.426,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4350, 0.4260, 0.4250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.24,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2410, 0.2400, 0.2380]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.078,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0780, 1.0770, 1.2470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 19.84,
            "unit": "s",
            "extra": "median of 3/3 runs: [19.8400, 19.7580, 19.9240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1270, 0.1260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.393,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3930, 0.3930, 0.3930]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.173,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1750, 0.1730, 0.1700]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.132,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1320, 0.1280, 0.1320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.039,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0390, 0.0390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.822,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8220, 0.8310, 0.8190]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 1.686,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6860, 1.6910, 1.6800]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.125,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1260, 0.1250, 0.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.185,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1860, 0.1840, 0.1850]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.108,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1080, 0.1090, 0.1060]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.067,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0670, 0.0680, 0.0660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0380, 0.0370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.316,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3160, 0.3440, 0.3140]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 0.839,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8390, 0.8680, 0.8320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2",
            "value": 0.129,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1290, 0.1290, 0.1290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2",
            "value": 0.399,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4030, 0.3980, 0.3990]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2",
            "value": 0.141,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1410, 0.1410, 0.1430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2",
            "value": 0.012,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0120, 0.0120, 0.0120]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2",
            "value": 0.042,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0390, 0.0420, 0.0420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2",
            "value": 0.08,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0800, 0.0830, 0.0800]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2",
            "value": 0.804,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8040, 0.8050, 0.8040]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2-par",
            "value": 0.068,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0680, 0.0680, 0.0680]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2-par",
            "value": 0.191,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1910, 0.1910, 0.2100]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2-par",
            "value": 0.075,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0750, 0.0750, 0.0740]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2-par",
            "value": 0.015,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0150, 0.0150, 0.0160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2-par",
            "value": 0.04,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0400, 0.0410, 0.0370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2-par",
            "value": 0.08,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0800, 0.0840, 0.0790]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2-par",
            "value": 0.474,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4680, 0.4740, 0.4840]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0540, 0.0510, 0.0510]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 1.517,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8440, 1.5170, 1.5100]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 2.08,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1700, 2.0800, 2.0290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.048,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0540, 0.0480, 0.0470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.033,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0330, 0.0330, 0.0330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.131,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1320, 0.1260, 0.1310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 3.854,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.2860, 3.8540, 3.8000]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.024,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0240, 0.0220, 0.0240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0380, 0.0370, 0.0370]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.026,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0260, 0.0260, 0.0260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.02,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0200, 0.0200, 0.0210]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.032,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0330, 0.0320, 0.0320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.124,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1240, 0.1230, 0.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.264,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2650, 0.2600, 0.2640]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.024,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0220, 0.0240, 0.0250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.038,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0380, 0.0360, 0.0390]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.026,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0260, 0.0260, 0.0270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.02,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0200, 0.0200, 0.0210]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.032,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0320, 0.0320, 0.0340]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.123,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1230, 0.1240, 0.1230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.262,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2620, 0.2620, 0.2680]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2",
            "value": 0.032,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0320, 0.0340, 0.0320]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2",
            "value": 0.042,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0450, 0.0420]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2",
            "value": 0.03,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0320, 0.0290]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2",
            "value": 0.024,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0240, 0.0250, 0.0240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2",
            "value": 0.12,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1200, 0.1200, 0.1180]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2",
            "value": 0.102,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1220, 0.1020, 0.0920]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2",
            "value": 0.36,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3700, 0.3600, 0.3380]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2-par",
            "value": 0.033,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0330, 0.0330, 0.0330]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2-par",
            "value": 0.042,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0420, 0.0450]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2-par",
            "value": 0.03,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0310, 0.0300, 0.0300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2-par",
            "value": 0.024,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0240, 0.0240, 0.0240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2-par",
            "value": 0.116,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1130, 0.1360, 0.1160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2-par",
            "value": 0.107,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1070, 0.1080, 0.1050]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2-par",
            "value": 0.353,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3500, 0.3730, 0.3530]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.192574,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1926, 4.3138, 4.1570]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.665775,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6660, 0.6590, 0.6658]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 4.012257,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9953, 4.0123, 4.0252]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 10.773108,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.7731, 10.8780, 10.7039]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.239772,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2646, 1.2398, 1.2284]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.266276,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2674, 0.2663, 0.2552]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.237498,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.2555, 4.1143, 4.2375]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.688483,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7211, 0.6601, 0.6885]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 3.949211,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9492, 3.9050, 4.0188]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 10.794027,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.7940, 10.5190, 10.8726]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.220022,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2200, 1.2163, 1.2729]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.262497,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2625, 0.2528, 0.2856]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.141516,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1214, 4.2444, 4.1415]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.672992,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6730, 0.6603, 0.6883]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.912907,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9026, 3.9634, 3.9129]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 10.552229,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.5522, 10.7413, 10.5067]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.227513,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2275, 1.2387, 1.1161]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.257938,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2455, 0.2589, 0.2579]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2",
            "value": 6.743408,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.7434, 6.6263, 6.7614]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2",
            "value": 2.049868,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0650, 2.0499, 2.0317]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e2",
            "value": 16.118052,
            "unit": "s",
            "extra": "median of 3/3 runs: [16.2384, 16.1181, 15.7710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e2",
            "value": 30.323396,
            "unit": "s",
            "extra": "median of 3/3 runs: [30.7053, 30.3234, 30.0494]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e2",
            "value": 4.865353,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.9904, 4.8654, 4.8230]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2",
            "value": 0.272736,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2727, 0.2663, 0.2760]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2-par",
            "value": 6.667212,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.6152, 6.6672, 6.6900]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2-par",
            "value": 2.061687,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0602, 2.0657, 2.0617]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e2-par",
            "value": 16.08887,
            "unit": "s",
            "extra": "median of 3/3 runs: [15.9781, 16.0889, 16.1744]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e2-par",
            "value": 30.383732,
            "unit": "s",
            "extra": "median of 3/3 runs: [30.1723, 30.3837, 30.5192]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e2-par",
            "value": 4.910144,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.8605, 4.9101, 4.9314]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2-par",
            "value": 0.270547,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2695, 0.2755, 0.2705]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: AMD EPYC 7763 64-Core Processor (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
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
          "id": "216dae17da6887b9e2c894de9726164b62512a00",
          "message": "gs",
          "timestamp": "2026-04-25T04:39:26-04:00",
          "tree_id": "8363cab567366b698de12583f79adc76a80065fe",
          "url": "https://github.com/flatironinstitute/numbl/commit/216dae17da6887b9e2c894de9726164b62512a00"
        },
        "date": 1777107114011,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.4908,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4969, 0.4892, 0.4908]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.3176,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3176, 0.3163, 0.3181]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.317,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3170, 0.3172, 0.3169]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2",
            "value": 0.3173,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3173, 0.3166, 0.3191]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2-par",
            "value": 0.3178,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3166, 0.3178, 0.3220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.6437,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6437, 0.6494, 0.6300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0644,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0642, 0.0645, 0.0644]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0644,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0644, 0.0644, 0.0645]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2",
            "value": 0.0643,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0643, 0.0643, 0.0644]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2-par",
            "value": 0.0644,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0644, 0.0644, 0.0646]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 1.044,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0440, 1.0590, 1.0140]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 1.231,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2490, 1.2310, 1.1940]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.554,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5540, 0.5690, 0.5500]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.224,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2240, 0.2260, 0.2240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 2.252,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.2520, 2.2680, 2.2220]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 5.324,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.3240, 5.3520, 5.2040]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.156,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1560, 0.1590, 0.1500]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.294,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2940, 0.2910, 0.2950]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.343,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3430, 0.3380, 0.3560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1270, 0.1250, 0.1270]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 1.266,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2660, 1.2730, 1.2650]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 2.185,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1850, 2.1850, 2.1930]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.152,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1530, 0.1520, 0.1460]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.295,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2950, 0.2930, 0.2970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.34,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3440, 0.3400, 0.3350]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.084,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0840, 0.0840, 0.0810]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.415,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3930, 0.4190, 0.4150]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.274,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2690, 1.2880, 1.2740]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2",
            "value": 0.165,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1670, 0.1650, 0.1590]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2",
            "value": 0.393,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3930, 0.3940, 0.3920]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2",
            "value": 0.402,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4020, 0.4180, 0.3980]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2",
            "value": 0.204,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2140, 0.2030, 0.2040]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2",
            "value": 1.282,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2780, 1.2840, 1.2820]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2",
            "value": 2.454,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.4540, 2.4630, 2.4340]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2-par",
            "value": 0.157,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1690, 0.1570, 0.1510]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2-par",
            "value": 0.226,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2260, 0.2240, 0.2280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2-par",
            "value": 0.397,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4280, 0.3700, 0.3970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2-par",
            "value": 0.173,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1810, 0.1730, 0.1690]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2-par",
            "value": 0.409,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4090, 0.4080, 0.4110]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2-par",
            "value": 1.356,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4130, 1.3320, 1.3560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.828,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8280, 0.8290, 0.8280]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 8.077,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.1490, 7.9830, 8.0770]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 8.75,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.7420, 8.7500, 8.7850]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.711,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7110, 0.7100, 0.7120]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.425,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4210, 0.4250, 0.4310]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.559,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5450, 1.5590, 1.5720]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 20.397,
            "unit": "s",
            "extra": "median of 3/3 runs: [20.3970, 20.2560, 20.4050]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.298,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2980, 0.2980, 0.2980]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.368,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3680, 0.3680, 0.3680]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.281,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2920, 0.2760, 0.2810]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.292,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2920, 0.2930, 0.2890]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.107,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1120, 0.1070, 0.0960]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 0.768,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7550, 0.7700, 0.7680]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 2.112,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1170, 2.1120, 2.1000]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.297,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2970, 0.2970, 0.2970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.185,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1840, 0.1850, 0.1870]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.182,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1820, 0.1870, 0.1760]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.107,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1070, 0.1060, 0.1070]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.096,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0950, 0.1090, 0.0960]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.323,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3260, 0.3230, 0.3080]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 1.191,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1910, 1.2070, 1.1710]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2",
            "value": 0.302,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3020, 0.3020, 0.3030]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2",
            "value": 0.387,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3870, 0.3800, 0.3890]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2",
            "value": 0.181,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1780, 0.1810, 0.1840]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2",
            "value": 0.013,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0130, 0.0130, 0.0130]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2",
            "value": 0.093,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0910, 0.0930, 0.0960]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2",
            "value": 0.072,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0720, 0.0720, 0.0720]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2",
            "value": 1.044,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0440, 1.0410, 1.0570]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2-par",
            "value": 0.106,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1060, 0.1120, 0.1040]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2-par",
            "value": 0.212,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2080, 0.2120, 0.2140]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2-par",
            "value": 0.087,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0870, 0.0890, 0.0860]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2-par",
            "value": 0.014,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0140, 0.0140, 0.0150]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2-par",
            "value": 0.093,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0990, 0.0930, 0.0880]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2-par",
            "value": 0.072,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0720, 0.0720, 0.0720]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2-par",
            "value": 0.586,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5860, 0.5920, 0.5790]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.187,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1620, 0.1870, 0.1970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 0.326,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3170, 0.3260, 0.3260]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 0.636,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6180, 0.6410, 0.6360]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.18,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1610, 0.1870, 0.1800]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.1,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0990, 0.1090, 0.1000]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.119,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1190, 0.1190, 0.1170]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 1.556,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4750, 1.5700, 1.5560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0640, 0.0660, 0.0670]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.143,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1430, 0.1400, 0.1560]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.081,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0810, 0.0780, 0.0970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.065,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0620, 0.0650, 0.0670]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.106,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0980, 0.1060, 0.1090]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.12,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1170, 0.1200, 0.1200]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.575,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5650, 0.5750, 0.6170]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.064,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0640, 0.0630, 0.0650]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.158,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1580, 0.1610, 0.1450]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.078,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0770, 0.0850, 0.0780]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.063,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0600, 0.0680, 0.0630]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.105,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0950, 0.1050, 0.1060]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.117,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1150, 0.1170, 0.1170]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.574,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5690, 0.5990, 0.5740]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2",
            "value": 0.073,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0730, 0.0820, 0.0700]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2",
            "value": 0.143,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1430, 0.1390, 0.1460]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2",
            "value": 0.08,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0800, 0.0860, 0.0800]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0640, 0.0730, 0.0660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2",
            "value": 0.21,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2010, 0.2130, 0.2100]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2",
            "value": 0.124,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1620, 0.1220, 0.1240]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2",
            "value": 0.715,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7220, 0.7150, 0.6970]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2-par",
            "value": 0.081,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0710, 0.0830, 0.0810]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2-par",
            "value": 0.165,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1650, 0.1700, 0.1510]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2-par",
            "value": 0.082,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0830, 0.0820, 0.0820]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2-par",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0690, 0.0640, 0.0660]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2-par",
            "value": 0.211,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2110, 0.2120, 0.2050]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2-par",
            "value": 0.13,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1320, 0.1260, 0.1300]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2-par",
            "value": 0.73,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7300, 0.7370, 0.7160]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.390014,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.3900, 4.4250, 4.3493]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.648707,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6487, 0.6499, 0.6364]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 4.004169,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0044, 4.0042, 3.9805]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 11.209533,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.2095, 11.2694, 11.0916]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.271767,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2718, 1.2789, 1.2413]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 0.544838,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5450, 0.5448, 0.5324]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.331026,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.2929, 4.3310, 4.3802]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.646987,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6981, 0.6467, 0.6470]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 3.998277,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9072, 4.0035, 3.9983]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 11.111876,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.9336, 11.1119, 11.2048]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.230512,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1128, 1.2305, 1.2796]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 0.53207,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5315, 0.5321, 0.5497]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.366804,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.4021, 4.3119, 4.3668]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.648604,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6396, 0.6601, 0.6486]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.967299,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0316, 3.8901, 3.9673]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 11.124954,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.3028, 10.8091, 11.1250]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.263085,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2991, 1.0790, 1.2631]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 0.540296,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5440, 0.5310, 0.5403]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2",
            "value": 6.821845,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.8218, 6.7241, 6.8243]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2",
            "value": 2.073761,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0738, 2.0946, 2.0707]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e2",
            "value": 15.797523,
            "unit": "s",
            "extra": "median of 3/3 runs: [15.8862, 15.7743, 15.7975]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e2",
            "value": 30.26368,
            "unit": "s",
            "extra": "median of 3/3 runs: [30.3388, 30.1883, 30.2637]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e2",
            "value": 4.663698,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.6637, 4.6782, 4.6517]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2",
            "value": 0.554598,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5359, 0.5546, 0.5570]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2-par",
            "value": 6.80127,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.8091, 6.8013, 6.6262]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2-par",
            "value": 2.09889,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1312, 2.0989, 2.0639]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e2-par",
            "value": 15.761753,
            "unit": "s",
            "extra": "median of 3/3 runs: [15.9062, 15.7618, 15.6711]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e2-par",
            "value": 30.168008,
            "unit": "s",
            "extra": "median of 3/3 runs: [30.4574, 30.1680, 29.8711]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e2-par",
            "value": 4.651216,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.6938, 4.6512, 4.6149]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2-par",
            "value": 0.543022,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5539, 0.5207, 0.5430]\nOS: linux 6.17.0-1010-azure (x64)\nCPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz (4 cores)\nRAM: 16 GB\nNode: v20.20.2\ncc: cc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0\nRunner: Linux ubuntu24 20260413.86.1"
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
          "id": "8ce11c1464db8b8c9b97200d8954bbace3682449",
          "message": "fix benchmarks.yml",
          "timestamp": "2026-04-23T19:43:04-04:00",
          "tree_id": "88c9a1003319795be790966341c9a88002cfd7a5",
          "url": "https://github.com/flatironinstitute/numbl/commit/8ce11c1464db8b8c9b97200d8954bbace3682449"
        },
        "date": 1776988393610,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.4494,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4494, 0.4488, 0.4509]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.1254,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1467, 0.1238, 0.1254]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.1309,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1375, 0.1256, 0.1309]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.4199,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3980, 0.4199, 0.4255]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0464,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0460, 0.0464, 0.0464]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0508,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0546, 0.0508, 0.0507]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.451,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4510, 0.4190, 0.4760]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.796,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7960, 0.8680, 0.7950]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.711,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7480, 0.7000, 0.7110]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.176,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1760, 0.1720, 0.1770]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 2.238,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.2720, 2.1630, 2.2380]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 4.398,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.4440, 4.3230, 4.3980]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.072,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0600, 0.0900, 0.0720]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.298,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2980, 0.3320, 0.2930]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.13,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1220, 0.1320, 0.1300]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.139,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1400, 0.1390, 0.1390]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 1.854,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8630, 1.8540, 1.8040]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 2.483,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.4830, 2.5470, 2.4380]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0660, 0.0680, 0.0640]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.284,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2950, 0.2840, 0.2830]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.151,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1680, 0.1500, 0.1510]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.018,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0170, 0.0180, 0.0180]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.631,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7120, 0.6300, 0.6310]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.15,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2590, 1.1500, 1.1480]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.659,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6800, 0.6240, 0.6590]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 6.386,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.3860, 6.3690, 6.6550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 7.335,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.3270, 7.5990, 7.3350]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.524,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5030, 0.5240, 0.5510]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.212,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2200, 0.2100, 0.2120]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.646,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5470, 1.6460, 1.7140]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 16.971,
            "unit": "s",
            "extra": "median of 3/3 runs: [16.6630, 16.9710, 17.1260]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.295,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2950, 0.2810, 0.2980]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.932,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9320, 0.9340, 0.9270]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.256,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2650, 0.2560, 0.2500]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.277,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3220, 0.2690, 0.2770]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.047,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0470, 0.0460, 0.0530]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 1.424,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5110, 1.4160, 1.4240]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 3.228,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.3730, 3.2020, 3.2280]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.285,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2850, 0.2850, 0.2860]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.321,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3210, 0.3150, 0.3280]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.114,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1140, 0.1280, 0.1130]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.113,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0970, 0.1130, 0.1340]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.056,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0560, 0.0560, 0.0610]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.522,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4770, 0.5220, 0.5460]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 1.418,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3480, 1.4180, 1.4690]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.095,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1140, 0.0920, 0.0950]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 0.172,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1730, 0.1510, 0.1720]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 0.33,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3300, 0.3180, 0.3420]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.107,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1130, 0.0920, 0.1070]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.06,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0600, 0.0520, 0.0890]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.164,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1580, 0.1640, 0.2030]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 0.947,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9470, 0.8690, 1.0090]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.036,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0310, 0.0360, 0.0410]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.085,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0660, 0.0850, 0.0870]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0510, 0.0520, 0.0490]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.036,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0360, 0.0340]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.071,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0710, 0.0720, 0.0670]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.172,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1660, 0.1720, 0.1720]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.449,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4220, 0.4530, 0.4490]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.032,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0270, 0.0320, 0.0440]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.091,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0670, 0.0910, 0.1290]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.055,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0400, 0.0550, 0.0730]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.032,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0270, 0.0320, 0.0520]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.076,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0590, 0.0760, 0.1080]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.218,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1630, 0.2180, 0.2330]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.504,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3830, 0.5040, 0.6400]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 6.597539,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.5975, 10.0011, 5.5309]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.565881,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9870, 0.5659, 0.4678]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 4.385493,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.6619, 4.3855, 4.3814]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 18.954481,
            "unit": "s",
            "extra": "median of 3/3 runs: [18.9742, 18.9545, 13.9943]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.29087,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.9034, 1.2571, 1.2909]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 2.242084,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.2218, 2.2421, 1.8353]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.792258,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.2550, 4.7923, 4.4609]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.45975,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6611, 0.4359, 0.4597]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 4.694281,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.5843, 4.6943, 5.1697]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 13.326864,
            "unit": "s",
            "extra": "median of 3/3 runs: [15.0407, 13.0249, 13.3269]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.220162,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2202, 1.1768, 1.2372]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 1.512487,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8962, 1.5125, 1.4794]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 5.507659,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.5077, 5.0275, 6.0620]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.602888,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4954, 0.6884, 0.6029]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.987828,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1647, 3.7915, 3.9878]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 13.404325,
            "unit": "s",
            "extra": "median of 3/3 runs: [13.4043, 12.6543, 14.0499]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 0.989849,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9850, 0.9898, 1.1389]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 1.817389,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8174, 1.7717, 1.8727]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
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
          "id": "088f752f7e85e2b8a7efcbf9bf9ceb6fc271fce5",
          "message": "jit: add --opt e2 (pure-interpreter outer + per-assign C kernels)\n\nExperimental mode that keeps the AST interpreter in place and compiles\nC kernels on demand for fusible assign chains, trailing/standalone\nreductions, multi-reductions over the same tensor, and pure-scalar\nuser functions. Supports `--par` via OpenMP when the per-element body\nhas heavy transcendentals (reductions use `reduction(...)` clauses\nwhere expressible).\n\nShared heavy-op heuristic between e1 and e2 lives in jit/heavyOps.ts.\nChain and reduction emitters share name mangling, param/koffi list\nbuilders, and the per-element FusedTarget via e2/emitShared.ts.\n\nThreaded through:\n * --dump-c <file> captures every compiled kernel\n * _currentScopeBody / _currentScopeExports for liveness-based\n   decisions (chain-local vs materialized output buffer)\n * _e2ChainAdvance so execStmts skips siblings consumed by a\n   multi-stmt chain kernel",
          "timestamp": "2026-04-24T09:57:22-04:00",
          "tree_id": "d115cffae8f5eb775a96158d3c6a0ce971f683c3",
          "url": "https://github.com/flatironinstitute/numbl/commit/088f752f7e85e2b8a7efcbf9bf9ceb6fc271fce5"
        },
        "date": 1777039685133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.4223,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4223, 0.4104, 0.4544]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.1148,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1148, 0.1139, 0.1477]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.1155,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1135, 0.1219, 0.1155]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2",
            "value": 0.1263,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1133, 0.1393, 0.1263]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2-par",
            "value": 0.1134,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1128, 0.1187, 0.1134]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.4043,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4363, 0.3788, 0.4043]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0446,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0435, 0.0446, 0.0456]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0517,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0504, 0.0517, 0.0522]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2",
            "value": 0.0521,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0495, 0.0521, 0.0679]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2-par",
            "value": 0.0542,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0525, 0.0542, 0.0574]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.68,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6800, 0.7560, 0.6350]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 1.341,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3410, 1.0640, 1.5530]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 1.088,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8480, 1.1050, 1.0880]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.302,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3020, 0.2740, 0.3600]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 3.334,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.0120, 4.3620, 3.3340]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 6.97,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.1840, 7.5610, 6.9700]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.083,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0790, 0.0930, 0.0830]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.334,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3030, 0.3850, 0.3340]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.159,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1130, 0.1600, 0.1590]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.157,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1410, 0.1570, 0.1670]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 2.04,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0550, 2.0400, 1.8460]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 2.691,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.6910, 2.8340, 2.5880]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0680, 0.0510, 0.0490]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.283,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2910, 0.2790, 0.2830]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.145,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1350, 0.1450, 0.1500]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.023,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0230, 0.0180, 0.0270]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.712,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7440, 0.7120, 0.6720]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.204,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2610, 1.2040, 1.1810]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2",
            "value": 0.078,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0660, 0.0780, 0.1150]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2",
            "value": 0.499,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4270, 0.4990, 0.5140]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2",
            "value": 0.45,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3540, 0.4500, 0.4780]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2",
            "value": 0.39,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3460, 0.4120, 0.3900]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2",
            "value": 1.869,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8010, 1.8690, 2.0990]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2",
            "value": 3.308,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.9940, 3.3080, 3.5960]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2-par",
            "value": 0.09,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0520, 0.0920, 0.0900]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2-par",
            "value": 0.427,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2450, 0.4380, 0.4270]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2-par",
            "value": 0.417,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3760, 0.4310, 0.4170]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2-par",
            "value": 0.313,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2760, 0.3130, 0.3290]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2-par",
            "value": 1.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6680, 1.0370, 1.1750]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2-par",
            "value": 2.312,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6180, 2.3120, 2.4370]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.77,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7860, 0.6950, 0.7700]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 7.604,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.6040, 7.6410, 6.6100]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 8.075,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.0750, 7.6510, 9.2320]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.58,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6970, 0.5510, 0.5800]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.25,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2500, 0.2620, 0.2370]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.809,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1580, 1.6440, 1.8090]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 19.238,
            "unit": "s",
            "extra": "median of 3/3 runs: [19.5680, 18.4440, 19.2380]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.297,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2970, 0.3460, 0.2970]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 1.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0510, 1.1630, 0.9580]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.281,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2930, 0.2810, 0.2550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.292,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3070, 0.2920, 0.2820]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.06,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0600, 0.0620, 0.0530]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 1.482,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4290, 1.4820, 1.6200]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 3.464,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.4360, 3.6250, 3.4640]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.292,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2920, 0.2840, 0.3000]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.341,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3410, 0.3680, 0.3310]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.112,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1110, 0.1640, 0.1120]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.097,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0970, 0.2100, 0.0970]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.055,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0560, 0.0550, 0.0550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.553,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5050, 0.5720, 0.5530]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 1.448,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4010, 1.6540, 1.4480]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2",
            "value": 0.333,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3130, 0.3330, 0.3900]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2",
            "value": 1.032,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0320, 1.0090, 1.1980]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2",
            "value": 0.24,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2400, 0.2740, 0.2350]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2",
            "value": 0.358,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2910, 0.3580, 0.3840]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2",
            "value": 0.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0440, 0.0510, 0.0540]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2",
            "value": 1.562,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5600, 1.5620, 1.8520]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2",
            "value": 3.587,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.4810, 3.5870, 4.1130]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2-par",
            "value": 0.184,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1840, 0.1800, 0.2020]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2-par",
            "value": 0.479,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4790, 0.4110, 0.4830]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2-par",
            "value": 0.132,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1320, 0.1930, 0.1280]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2-par",
            "value": 0.129,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1290, 0.1640, 0.1070]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2-par",
            "value": 0.064,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0610, 0.0790, 0.0640]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2-par",
            "value": 0.779,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8470, 0.7460, 0.7790]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2-par",
            "value": 1.774,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8320, 1.7740, 1.7620]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.12,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1130, 0.1240, 0.1200]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 0.176,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2060, 0.1760, 0.1700]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 0.445,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4470, 0.4450, 0.3720]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.114,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1080, 0.1140, 0.1300]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.077,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0760, 0.0990, 0.0770]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.242,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2420, 0.2620, 0.2010]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 1.192,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1920, 1.2200, 1.0710]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.04,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0310, 0.0430, 0.0400]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.099,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0700, 0.0990, 0.1080]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.063,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0710, 0.0480, 0.0630]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.045,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0490, 0.0390, 0.0450]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0780, 0.0660, 0.0640]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.176,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2170, 0.1760, 0.1750]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.495,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5160, 0.4700, 0.4950]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.029,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0250, 0.0450, 0.0290]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.086,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0860, 0.1040, 0.0680]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.04,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0540, 0.0390, 0.0400]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.027,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0290, 0.0240, 0.0270]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.063,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0790, 0.0630, 0.0600]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.199,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2150, 0.1580, 0.1990]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.432,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4880, 0.4320, 0.4230]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2",
            "value": 0.299,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2990, 0.2890, 0.4000]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2",
            "value": 0.372,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3730, 0.3720, 0.3410]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2",
            "value": 0.91,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9100, 0.7830, 0.9240]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2",
            "value": 0.317,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3580, 0.3170, 0.2770]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2",
            "value": 0.162,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1620, 0.1870, 0.1120]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2",
            "value": 0.213,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2130, 0.2580, 0.1900]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2",
            "value": 2.243,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.3130, 2.2060, 2.2430]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2-par",
            "value": 0.291,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2280, 0.2910, 0.3280]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2-par",
            "value": 0.304,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3040, 0.2900, 0.3550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2-par",
            "value": 0.742,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7420, 0.6570, 0.7620]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2-par",
            "value": 0.288,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2880, 0.3040, 0.2620]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2-par",
            "value": 0.169,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2080, 0.1690, 0.1210]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2-par",
            "value": 0.233,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2580, 0.2330, 0.1940]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2-par",
            "value": 2.022,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0280, 1.9430, 2.0220]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 6.563599,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.2840, 6.5636, 7.4383]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.516301,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4072, 0.5163, 0.5715]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 4.205545,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.8434, 4.2055, 4.2283]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 14.775547,
            "unit": "s",
            "extra": "median of 3/3 runs: [13.8728, 14.7755, 15.8307]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.194141,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1145, 1.3500, 1.1941]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 1.755663,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.7011, 1.7557, 1.8075]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 6.147826,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.3300, 5.3529, 6.1478]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.476057,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6903, 0.4761, 0.4644]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 4.457202,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.4572, 4.9076, 4.1029]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 14.39772,
            "unit": "s",
            "extra": "median of 3/3 runs: [17.8452, 14.1544, 14.3977]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.129346,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4715, 1.0613, 1.1293]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 2.080936,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.4025, 1.6865, 2.0809]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 7.42235,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.4223, 4.9354, 9.3163]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.732506,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7325, 0.7147, 0.9225]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 4.522071,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.2054, 6.3167, 4.5221]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 15.879531,
            "unit": "s",
            "extra": "median of 3/3 runs: [13.9994, 15.8795, 19.1577]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.171164,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8498, 1.1712, 1.4988]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 2.167137,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5131, 2.1671, 2.5098]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2",
            "value": 1.916333,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.5772, 1.8657, 1.9163]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2",
            "value": 1.489156,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8113, 1.4892, 1.0719]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2",
            "value": 0.162324,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1390, 0.1623, 0.1750]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2-par",
            "value": 2.177559,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1206, 2.2340, 2.1776]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2-par",
            "value": 1.490654,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6807, 1.3212, 1.4907]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2-par",
            "value": 0.152284,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1523, 0.1564, 0.1442]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
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
          "id": "47f450949a4e30b2728e5ad2e90e6e463dde91dc",
          "message": "ci: gate e2 smoke on NUMBL_CJIT_E2E, run in e1 job\n\nThe main Test job doesn't build the native addon, but the e2 smoke\ntests unconditionally attempted to compile kernels and link against\nlibnumbl_ops.a — same issue the e1 smoke tests solved with an opt-in\nenv var. Match that pattern: skip unless NUMBL_CJIT_E2E=1.\n\nThe dedicated \"Test --opt e1 / e2\" job (which does build the addon)\nnow runs e2 integration tests + e2 smoke tests alongside the e1 ones.",
          "timestamp": "2026-04-24T10:05:44-04:00",
          "tree_id": "902deb161265dc52e3604a97f0a92ccb43734414",
          "url": "https://github.com/flatironinstitute/numbl/commit/47f450949a4e30b2728e5ad2e90e6e463dde91dc"
        },
        "date": 1777040410162,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.5787,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5787, 0.6162, 0.5077]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.1266,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1316, 0.1266, 0.1258]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.1232,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1225, 0.1232, 0.1961]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2",
            "value": 0.1399,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1606, 0.1399, 0.1326]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2-par",
            "value": 0.1239,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1332, 0.1239, 0.1231]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.4197,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4197, 0.3755, 0.5552]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0453,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0453, 0.0547, 0.0441]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0531,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0531, 0.0510, 0.0631]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2",
            "value": 0.0472,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0633, 0.0472, 0.0461]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2-par",
            "value": 0.0539,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0539, 0.0552, 0.0514]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.531,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6900, 0.5310, 0.3790]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.86,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8600, 0.8930, 0.7310]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.799,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9030, 0.7990, 0.7170]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.187,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1950, 0.1870, 0.1720]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 2.571,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.7190, 2.5710, 2.3020]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 4.981,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.3670, 4.9810, 4.3010]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.059,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0580, 0.0780, 0.0590]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.307,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3190, 0.2830, 0.3070]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.116,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1290, 0.1110, 0.1160]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.137,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1410, 0.1360, 0.1370]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 1.778,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.9110, 1.7780, 1.7420]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 2.385,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.5580, 2.3850, 2.3610]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.067,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0700, 0.0600, 0.0670]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.278,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2750, 0.2860, 0.2780]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.152,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1520, 0.1410, 0.1590]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.018,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0180, 0.0200, 0.0180]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.671,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6450, 0.6710, 0.7190]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.18,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1600, 1.1800, 1.2400]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2",
            "value": 0.059,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0590, 0.0920, 0.0590]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2",
            "value": 0.442,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4170, 0.4450, 0.4420]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2",
            "value": 0.357,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3570, 0.3110, 0.3840]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2",
            "value": 0.387,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3870, 0.3690, 0.3960]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2",
            "value": 1.788,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.7820, 1.8140, 1.7880]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2",
            "value": 3.031,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.0010, 3.0310, 3.0700]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2-par",
            "value": 0.064,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0940, 0.0630, 0.0640]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2-par",
            "value": 0.331,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3980, 0.2900, 0.3310]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2-par",
            "value": 0.425,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4530, 0.4250, 0.3620]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2-par",
            "value": 0.277,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3190, 0.2770, 0.2630]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2-par",
            "value": 0.791,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7910, 0.8570, 0.7770]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2-par",
            "value": 1.914,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0550, 1.9140, 1.7960]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.908,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6070, 1.2520, 0.9080]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 9.118,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.1690, 9.1180, 9.2010]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 10.616,
            "unit": "s",
            "extra": "median of 3/3 runs: [9.2910, 11.8590, 10.6160]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.666,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6660, 0.5690, 0.9040]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.246,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2230, 0.2550, 0.2460]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 2.21,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6000, 2.2100, 2.4850]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 24.36,
            "unit": "s",
            "extra": "median of 3/3 runs: [19.5560, 25.2630, 24.3600]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.423,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4080, 0.4250, 0.4230]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 1.485,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6170, 1.4850, 1.2300]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.325,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4050, 0.3250, 0.3210]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.39,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3990, 0.3900, 0.3790]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.075,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0750, 0.0940, 0.0620]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 1.929,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.9100, 2.1430, 1.9290]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 4.814,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.8140, 4.8630, 4.3450]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.397,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3880, 0.4240, 0.3970]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.517,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5170, 0.5250, 0.5090]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.199,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1990, 0.2230, 0.1920]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.243,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2430, 0.1950, 0.2800]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.069,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0710, 0.0690, 0.0650]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.822,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8200, 0.8220, 1.0310]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 2.258,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.2380, 2.2580, 2.4750]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2",
            "value": 0.395,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3600, 0.4280, 0.3950]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2",
            "value": 1.322,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2600, 1.3400, 1.3220]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2",
            "value": 0.312,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3170, 0.2760, 0.3120]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2",
            "value": 0.384,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3590, 0.5970, 0.3840]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2",
            "value": 0.058,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0450, 0.0720, 0.0580]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2",
            "value": 1.979,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.9790, 2.2020, 1.8070]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2",
            "value": 4.32,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.3200, 4.9140, 4.2780]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2-par",
            "value": 0.221,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2210, 0.2010, 0.2580]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2-par",
            "value": 0.59,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7410, 0.5900, 0.5300]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2-par",
            "value": 0.195,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2280, 0.1950, 0.1810]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2-par",
            "value": 0.165,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1620, 0.2970, 0.1650]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2-par",
            "value": 0.069,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0830, 0.0580, 0.0690]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2-par",
            "value": 0.907,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9280, 0.9070, 0.8490]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2-par",
            "value": 2.248,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.3630, 2.2480, 2.0520]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.13,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1300, 0.1310, 0.1060]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 0.218,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2070, 0.2180, 0.2180]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 0.49,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4900, 0.4850, 0.5280]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.135,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1350, 0.1290, 0.1410]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.102,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1030, 0.0840, 0.1020]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.219,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2740, 0.1990, 0.2190]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 1.314,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3390, 1.2470, 1.3140]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.046,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0460, 0.0520]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.106,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1060, 0.1270, 0.0990]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.072,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0510, 0.0720, 0.0800]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.047,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0470, 0.0570, 0.0440]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.1,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0990, 0.1000, 0.1010]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.238,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2170, 0.2670, 0.2380]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.615,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5610, 0.6690, 0.6150]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0290, 0.0370, 0.0390]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.09,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0830, 0.0950, 0.0900]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.061,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0610, 0.0630, 0.0560]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0350, 0.0510]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.081,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0980, 0.0630, 0.0810]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.227,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2120, 0.2380, 0.2270]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.532,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5210, 0.5320, 0.5440]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2",
            "value": 0.369,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3790, 0.3630, 0.3690]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2",
            "value": 0.423,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5020, 0.4230, 0.4140]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2",
            "value": 0.996,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0650, 0.9120, 0.9960]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2",
            "value": 0.419,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4190, 0.4710, 0.4130]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2",
            "value": 0.235,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2250, 0.3090, 0.2350]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2",
            "value": 0.331,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3310, 0.3310, 0.2730]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2",
            "value": 2.808,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.9210, 2.8080, 2.7000]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2-par",
            "value": 0.426,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3540, 0.4750, 0.4260]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2-par",
            "value": 0.386,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4260, 0.3860, 0.3780]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2-par",
            "value": 1.046,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0010, 1.0770, 1.0460]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2-par",
            "value": 0.373,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3730, 0.3770, 0.3720]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2-par",
            "value": 0.196,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2290, 0.1770, 0.1960]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2-par",
            "value": 0.342,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3790, 0.2990, 0.3420]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2-par",
            "value": 2.761,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.7610, 2.7910, 2.7610]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 9.109516,
            "unit": "s",
            "extra": "median of 3/3 runs: [9.8933, 8.0294, 9.1095]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.782732,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7827, 0.7450, 0.9011]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 5.515449,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.4555, 6.1889, 5.5154]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 20.22012,
            "unit": "s",
            "extra": "median of 3/3 runs: [20.4917, 19.1991, 20.2201]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.57369,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8168, 1.4879, 1.5737]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 2.02406,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0036, 2.0241, 2.4912]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 6.960684,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.4210, 6.9607, 6.9343]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.852585,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9547, 0.8526, 0.6448]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 5.750875,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.7546, 5.3352, 5.7509]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 17.737762,
            "unit": "s",
            "extra": "median of 3/3 runs: [18.0596, 17.7378, 17.2511]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.361559,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3616, 1.6479, 1.3268]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 2.031532,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0315, 2.4500, 1.9764]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 7.692361,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.7748, 7.1955, 7.6924]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.747975,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7911, 0.7221, 0.7480]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 5.313589,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.3550, 5.3136, 5.0373]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 17.818221,
            "unit": "s",
            "extra": "median of 3/3 runs: [19.2623, 17.6494, 17.8182]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.471689,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4713, 1.5942, 1.4717]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 2.311682,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.3216, 2.2692, 2.3117]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2",
            "value": 3.034419,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.0344, 3.1147, 2.9355]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2",
            "value": 2.26464,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.2646, 2.2178, 2.3965]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2",
            "value": 0.224582,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2866, 0.2246, 0.1966]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2-par",
            "value": 2.984496,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.9845, 2.9517, 3.4659]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2-par",
            "value": 2.462052,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.4833, 2.4621, 2.2842]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2-par",
            "value": 0.239963,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1939, 0.2400, 0.2527]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
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
          "id": "401530b6d27922e0423d7ff1343b04311115e48d",
          "message": "e2: add paired-buffer complex tensor codegen\n\nExtends --opt e2 with paired-buffer (re/im) kernel emission for complex\ntensor chains, mirroring e1's complexKernelEmit.ts. On the complex\ntensor benchmark, fused kernels (1-4) now match or beat --opt e1: total\nof fused kernels drops from 1.45s to 0.33s, roughly matching e1's 0.34s.\n\nPer-op kernels (z./w, abs+sum) still bail to the interpreter; closing\nthat gap is orthogonal to codegen and left for a follow-up.",
          "timestamp": "2026-04-24T11:03:04-04:00",
          "tree_id": "519b251a2793f105a9a034390fb7dd36c03ca390",
          "url": "https://github.com/flatironinstitute/numbl/commit/401530b6d27922e0423d7ff1343b04311115e48d"
        },
        "date": 1777043635056,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.4448,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5160, 0.4448, 0.4373]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.1311,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1311, 0.1359, 0.1223]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.1429,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1309, 0.1429, 0.1513]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2",
            "value": 0.1249,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1236, 0.1249, 0.1419]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2-par",
            "value": 0.1241,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1185, 0.1262, 0.1241]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.402,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3997, 0.4020, 0.4050]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0463,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0453, 0.0607, 0.0463]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0506,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0546, 0.0506, 0.0505]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2",
            "value": 0.0479,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0535, 0.0443, 0.0479]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2-par",
            "value": 0.0504,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0490, 0.0504, 0.0504]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.414,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3910, 0.4200, 0.4140]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.812,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8120, 0.7940, 0.8140]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.765,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7650, 0.6840, 0.8040]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.171,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1710, 0.1700, 0.2260]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 2.401,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.3280, 2.4700, 2.4010]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 4.538,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.4680, 4.5380, 4.6590]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.071,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0700, 0.0710, 0.0770]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.34,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3290, 0.3400, 0.3830]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.145,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1450, 0.1360, 0.1830]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.143,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1390, 0.1430, 0.1690]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 1.846,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.7960, 1.8460, 2.0810]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 2.536,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.4790, 2.5360, 2.8930]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.077,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0770, 0.0790, 0.0690]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.35,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3500, 0.3720, 0.3370]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.19,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2050, 0.1900, 0.1850]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.038,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0380, 0.0360, 0.0380]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 1.013,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9440, 1.2230, 1.0130]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.642,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6140, 1.9000, 1.6420]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2",
            "value": 0.083,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0850, 0.0830, 0.0630]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2",
            "value": 0.542,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5570, 0.4630, 0.5420]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2",
            "value": 0.427,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4270, 0.4110, 0.4470]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2",
            "value": 0.427,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4020, 0.4270, 0.4540]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2",
            "value": 2.192,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.4150, 2.0930, 2.1920]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2",
            "value": 3.699,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.8870, 3.4770, 3.6990]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2-par",
            "value": 0.092,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0970, 0.0920, 0.0820]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2-par",
            "value": 0.389,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3190, 0.4280, 0.3890]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2-par",
            "value": 0.452,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4790, 0.4440, 0.4520]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2-par",
            "value": 0.316,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3160, 0.3180, 0.2710]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2-par",
            "value": 0.972,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9710, 0.9720, 1.0060]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2-par",
            "value": 2.199,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1820, 2.2540, 2.1990]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.773,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7780, 0.7730, 0.7370]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 7.692,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.6920, 7.1570, 8.4070]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 9.098,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.7590, 9.0980, 9.1800]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.681,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6280, 0.6810, 0.7760]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.274,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2360, 0.2740, 0.2820]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 2.114,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1140, 1.9840, 2.2370]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 20.208,
            "unit": "s",
            "extra": "median of 3/3 runs: [20.2080, 19.9670, 21.6200]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.348,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3530, 0.3410, 0.3480]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 1.153,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1680, 1.1530, 0.9880]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.305,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2960, 0.3940, 0.3050]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.337,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3030, 0.3370, 0.3400]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.046,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0460, 0.1020, 0.0460]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 1.734,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6100, 1.9780, 1.7340]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 3.776,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.7760, 4.3050, 3.7610]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.359,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3400, 0.3840, 0.3590]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.497,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4110, 0.4970, 0.5420]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.205,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1670, 0.2330, 0.2050]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.126,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1160, 0.1260, 0.2480]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.061,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0610, 0.0590, 0.0740]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.649,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5820, 0.6490, 0.8270]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 1.949,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6770, 1.9490, 2.2540]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2",
            "value": 0.346,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3460, 0.2910, 0.3770]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2",
            "value": 1.257,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4240, 0.9660, 1.2570]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2",
            "value": 0.289,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2890, 0.2310, 0.2900]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2",
            "value": 0.3,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3470, 0.3000, 0.2700]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2",
            "value": 0.064,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0920, 0.0450, 0.0640]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2",
            "value": 1.527,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.7530, 1.4770, 1.5270]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2",
            "value": 3.783,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.2500, 3.3100, 3.7830]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2-par",
            "value": 0.228,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1820, 0.2280, 0.2550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2-par",
            "value": 0.622,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6220, 0.5960, 0.7120]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2-par",
            "value": 0.18,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1800, 0.1510, 0.2880]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2-par",
            "value": 0.217,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2170, 0.2050, 0.2180]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2-par",
            "value": 0.078,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0780, 0.0710, 0.0900]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2-par",
            "value": 0.84,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8680, 0.8400, 0.7150]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2-par",
            "value": 2.147,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1470, 2.0920, 2.2770]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.143,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1430, 0.1380, 0.1600]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 0.226,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2260, 0.1930, 0.3100]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 0.582,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6700, 0.5580, 0.5820]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.169,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1690, 0.1460, 0.1800]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.106,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0930, 0.1060, 0.1300]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.283,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2470, 0.3140, 0.2830]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 1.548,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5480, 1.4550, 1.6450]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.058,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0580, 0.0530, 0.0740]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1200, 0.1270, 0.1310]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.069,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0680, 0.0970, 0.0690]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.044,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0440, 0.0720, 0.0360]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.107,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1070, 0.1570, 0.1000]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.252,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3060, 0.2520, 0.2180]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.703,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7030, 0.7590, 0.6280]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.037,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0270, 0.0440]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.103,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1030, 0.0950, 0.1230]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.068,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0680, 0.0730, 0.0680]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.043,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0410, 0.0430, 0.0730]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.119,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1210, 0.1190, 0.1160]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.24,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2400, 0.2820, 0.2230]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.639,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6110, 0.6390, 0.6470]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2",
            "value": 0.043,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0430, 0.0520, 0.0420]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2",
            "value": 0.101,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1230, 0.0860, 0.1010]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2",
            "value": 0.087,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0920, 0.0510, 0.0870]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2",
            "value": 0.05,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0630, 0.0380, 0.0500]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2",
            "value": 0.225,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3610, 0.2200, 0.2250]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2",
            "value": 0.327,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3850, 0.3270, 0.2780]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2",
            "value": 0.783,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.0670, 0.7740, 0.7830]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2-par",
            "value": 0.029,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0280, 0.0290, 0.0530]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2-par",
            "value": 0.065,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0570, 0.0650, 0.1210]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2-par",
            "value": 0.05,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0500, 0.0820]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2-par",
            "value": 0.041,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0260, 0.0410, 0.0550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2-par",
            "value": 0.199,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1490, 0.3210, 0.1990]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2-par",
            "value": 0.277,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2770, 0.2580, 0.3440]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2-par",
            "value": 0.765,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5740, 0.7650, 0.8550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 6.402605,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.2963, 6.4026, 5.2038]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.486397,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8347, 0.4174, 0.4864]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 4.377973,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.3780, 3.9423, 5.2139]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 14.454161,
            "unit": "s",
            "extra": "median of 3/3 runs: [15.9401, 14.4542, 14.4529]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 1.184031,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1840, 1.2069, 0.9805]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 2.012355,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.7578, 2.0124, 2.0314]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 5.462998,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.7606, 5.4630, 5.0658]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.589264,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5185, 0.5893, 0.6985]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 4.925428,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.9254, 3.3086, 5.8133]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 15.149007,
            "unit": "s",
            "extra": "median of 3/3 runs: [15.1490, 12.2953, 15.3382]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.314909,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5880, 1.0561, 1.3149]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 1.828552,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8286, 1.5483, 1.8877]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 5.662664,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.5651, 5.6627, 5.0981]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.721724,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1239, 0.7217, 0.7010]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 4.44593,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.0326, 4.4459, 3.8226]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 14.542421,
            "unit": "s",
            "extra": "median of 3/3 runs: [18.1972, 14.5424, 13.2767]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 1.264823,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6623, 1.2648, 1.2394]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 2.049952,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.2111, 2.0500, 2.0037]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2",
            "value": 2.520958,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.5210, 1.9737, 2.6996]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2",
            "value": 1.356598,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3566, 1.1957, 1.7640]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2",
            "value": 0.127586,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1276, 0.1014, 0.1292]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2-par",
            "value": 3.203829,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.1880, 3.2038, 3.6541]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2-par",
            "value": 2.262072,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8772, 2.3136, 2.2621]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2-par",
            "value": 0.185223,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1852, 0.2130, 0.1726]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
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
          "id": "a3231a35b377f65a4776647569e4dfeb4899e714",
          "message": "e2: fix _isLogical propagation and NaN self-comparison under -ffast-math\n\nTwo bugs in the e2 per-assign C kernel path:\n\n1. Comparison ops (>, <, ==, ~=, <=, >=) and unary ~ produced the correct\n   0/1 Float64Array values but did not set _isLogical on the output\n   RuntimeTensor. Downstream logical indexing (pts(:, mask)) then treated\n   the tensor as double indices instead of a boolean mask, failing with\n   \"Index exceeds array bounds\". Fix: unifyBinaryType now returns\n   isLogical:true for comparison ops; unary ~ on a tensor also propagates\n   isLogical:true; assignKernel.ts stamps _isLogical:true on escape LHS\n   tensors whose envTypes entry is logical.\n\n2. x ~= x (the standard MATLAB NaN-detection idiom) compiled to a C kernel\n   containing `in_x[i] != in_x[i]`, which -ffinite-math-only (implied by\n   -ffast-math) constant-folds to 0 — so NaN elements were never detected.\n   Fix: emitShared.ts defines E2_C_PROLOGUE (adds a memcpy-based\n   numbl_is_nan_fp helper opaque to the optimiser) and E2_C_SCALAR_TARGET\n   (uses the helper when both operand strings are identical). Chain and\n   reduction emitters now use both.\n\nTests added: e2_logical_index.m, e2_nan_self_comparison.m.",
          "timestamp": "2026-04-24T11:42:36-04:00",
          "tree_id": "9a6fe456ea09a49e6ce33e135e007630498bb089",
          "url": "https://github.com/flatironinstitute/numbl/commit/a3231a35b377f65a4776647569e4dfeb4899e714"
        },
        "date": 1777046092247,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.4516,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4516, 0.5126, 0.4444]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.1924,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1924, 0.1458, 0.2195]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.1281,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1279, 0.1834, 0.1281]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2",
            "value": 0.1412,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1412, 0.1520, 0.1356]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2-par",
            "value": 0.1316,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1834, 0.1316, 0.1237]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.4549,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4549, 0.5429, 0.4151]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0457,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0454, 0.0457, 0.0487]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0519,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0542, 0.0504, 0.0519]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2",
            "value": 0.0462,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0477, 0.0459, 0.0462]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2-par",
            "value": 0.0511,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0511, 0.0510, 0.0514]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.466,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4190, 0.4660, 0.5220]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.863,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8170, 0.8630, 0.9250]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.785,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7820, 0.8570, 0.7850]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.184,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1840, 0.2280, 0.1840]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 2.465,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.4650, 2.4810, 2.3990]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 4.816,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.6680, 4.8940, 4.8160]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.056,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0560, 0.0620, 0.0540]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.306,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2970, 0.3060, 0.3140]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.124,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1560, 0.1150, 0.1240]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.14,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1400, 0.1340, 0.1400]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 1.839,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0370, 1.8210, 1.8390]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 2.471,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.6860, 2.4380, 2.4710]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.054,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0490, 0.0580, 0.0540]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.292,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3190, 0.2920, 0.2840]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.145,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1450, 0.1390, 0.1650]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.017,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0160, 0.0170, 0.0310]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.667,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7900, 0.6550, 0.6670]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.2,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3190, 1.1620, 1.2000]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2",
            "value": 0.062,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0630, 0.0580, 0.0620]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2",
            "value": 0.424,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4160, 0.4300, 0.4240]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2",
            "value": 0.418,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4180, 0.3690, 0.4510]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2",
            "value": 0.396,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3530, 0.3960, 0.4130]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2",
            "value": 1.732,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8920, 1.7140, 1.7320]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2",
            "value": 3.082,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.1430, 2.9670, 3.0820]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2-par",
            "value": 0.074,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0630, 0.0810, 0.0740]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2-par",
            "value": 0.369,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3920, 0.3390, 0.3690]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2-par",
            "value": 0.414,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3770, 0.4580, 0.4140]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2-par",
            "value": 0.292,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2920, 0.2940, 0.2820]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2-par",
            "value": 0.882,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8820, 0.8380, 1.0400]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2-par",
            "value": 2.01,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0050, 2.0100, 2.1790]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.715,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7150, 0.7340, 0.5820]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 7.457,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.4570, 8.2480, 6.1360]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 7.816,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.0490, 7.8160, 7.6860]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.579,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6640, 0.5790, 0.5090]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.203,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2010, 0.2300, 0.2030]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 1.851,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8610, 1.8510, 1.5820]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 18.947,
            "unit": "s",
            "extra": "median of 3/3 runs: [18.9470, 19.4590, 16.6980]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.279,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2620, 0.3060, 0.2790]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 0.974,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8640, 1.0130, 0.9740]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.257,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2290, 0.2690, 0.2570]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.267,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2740, 0.2590, 0.2670]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.039,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0340, 0.0390, 0.0480]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 1.417,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3140, 1.4430, 1.4170]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 3.243,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.9760, 3.3290, 3.2430]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.282,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2820, 0.2830, 0.2810]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.324,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3240, 0.3250, 0.3130]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.113,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1370, 0.1130, 0.1070]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.096,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0960, 0.1000, 0.0950]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.054,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0550, 0.0540, 0.0540]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.504,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4790, 0.5650, 0.5040]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 1.373,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3730, 1.4410, 1.3550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2",
            "value": 0.284,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2820, 0.2840, 0.4020]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2",
            "value": 0.924,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9630, 0.9220, 0.9240]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2",
            "value": 0.218,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2350, 0.2140, 0.2180]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2",
            "value": 0.296,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2750, 0.2990, 0.2960]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2",
            "value": 0.04,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0400, 0.0400, 0.0540]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2",
            "value": 1.416,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4160, 1.4240, 1.4150]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2",
            "value": 3.21,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.2100, 3.1830, 3.3090]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2-par",
            "value": 0.101,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1290, 0.1010, 0.0990]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2-par",
            "value": 0.331,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3310, 0.3360, 0.3230]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2-par",
            "value": 0.078,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0780, 0.0980, 0.0760]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2-par",
            "value": 0.11,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1100, 0.1130, 0.1090]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2-par",
            "value": 0.059,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0590, 0.0650, 0.0570]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2-par",
            "value": 0.487,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4870, 0.5000, 0.4870]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2-par",
            "value": 1.193,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1930, 1.2120, 1.1500]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.092,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0920, 0.0870, 0.1090]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 0.163,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1630, 0.1370, 0.1860]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 0.341,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3790, 0.3320, 0.3410]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.095,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1430, 0.0870, 0.0950]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.052,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0520, 0.0520, 0.0710]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.16,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1580, 0.1600, 0.1620]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 0.964,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9860, 0.8550, 0.9640]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.034,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0290, 0.0340, 0.0340]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.061,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0440, 0.0610, 0.0670]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.04,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0400, 0.0400]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.031,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0310, 0.0320]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.053,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0540, 0.0530, 0.0490]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.155,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1520, 0.1550, 0.1550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.374,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3400, 0.3740, 0.3780]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.027,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0210, 0.0270, 0.0270]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.065,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0460, 0.0660, 0.0650]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.036,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0280, 0.0360, 0.0360]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.025,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0220, 0.0250, 0.0260]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.05,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0490, 0.0540, 0.0500]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.155,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1560, 0.1550, 0.1550]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.358,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3210, 0.3630, 0.3580]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2",
            "value": 0.035,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0350, 0.0290, 0.0420]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2",
            "value": 0.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0510, 0.0480, 0.1110]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2",
            "value": 0.044,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0450, 0.0380, 0.0440]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2",
            "value": 0.035,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0380, 0.0330, 0.0350]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2",
            "value": 0.167,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1410, 0.1750, 0.1670]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2",
            "value": 0.215,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2100, 0.2150, 0.2280]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2",
            "value": 0.538,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5190, 0.5380, 0.6270]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2-par",
            "value": 0.029,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0240, 0.0290, 0.0330]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2-par",
            "value": 0.069,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0520, 0.0690, 0.0830]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2-par",
            "value": 0.052,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0360, 0.0520, 0.0600]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2-par",
            "value": 0.03,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0300, 0.0300, 0.0310]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2-par",
            "value": 0.15,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1320, 0.1500, 0.1530]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2-par",
            "value": 0.222,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2120, 0.2320, 0.2220]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2-par",
            "value": 0.563,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4850, 0.5630, 0.5820]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 4.784759,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.7848, 4.6260, 4.9296]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.424258,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4908, 0.4243, 0.4025]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 3.420531,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.0652, 3.7429, 3.4205]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 11.315339,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.8937, 11.3153, 11.3471]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 0.822542,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9236, 0.7899, 0.8225]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 1.371576,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3042, 1.3716, 1.3988]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 3.746613,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.6263, 4.6980, 3.7466]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.417046,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4727, 0.4170, 0.4091]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 2.991387,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.9914, 2.9315, 3.1440]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 9.629452,
            "unit": "s",
            "extra": "median of 3/3 runs: [9.4531, 10.7063, 9.6295]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 0.786233,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7801, 0.8782, 0.7862]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 1.273153,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2732, 1.4853, 1.2406]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.348409,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.8620, 4.3484, 4.5139]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.403096,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5146, 0.3939, 0.4031]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.126465,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.1265, 2.9290, 3.2931]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 10.400749,
            "unit": "s",
            "extra": "median of 3/3 runs: [10.0301, 10.4007, 10.5632]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 0.849011,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8490, 0.9186, 0.7610]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 1.353488,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3535, 1.4905, 1.2689]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2",
            "value": 8.179669,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.2684, 8.6479, 8.1797]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2",
            "value": 1.292278,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.2923, 1.1207, 1.4156]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e2",
            "value": 15.315605,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.8649, 15.3156, 15.3755]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e2",
            "value": 31.988992,
            "unit": "s",
            "extra": "median of 3/3 runs: [26.6086, 31.9890, 32.0132]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e2",
            "value": 4.561126,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.9183, 4.5873, 4.5611]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2",
            "value": 1.889891,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.7814, 1.8899, 1.9744]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2-par",
            "value": 7.528973,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.7416, 7.5290, 7.9053]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2-par",
            "value": 1.668205,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.6682, 1.6443, 1.7059]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e2-par",
            "value": 15.01909,
            "unit": "s",
            "extra": "median of 3/3 runs: [15.8500, 15.0191, 14.7476]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e2-par",
            "value": 31.243939,
            "unit": "s",
            "extra": "median of 3/3 runs: [31.1693, 31.2439, 31.2948]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e2-par",
            "value": 4.651135,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.6653, 4.6511, 4.5126]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2-par",
            "value": 1.868462,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.7875, 1.8685, 1.9229]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
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
          "id": "b0de4ac63df87962cd1ccf1f2ca8419b205e3245",
          "message": "e2: whole-loop C JIT for tight numerical for-loops\n\nCompile `for varName = lo:hi <body> end` to a single C kernel under\n--opt e2 when the body fits a supported shape (scalar assigns, scalar\nindexed tensor reads/writes, elemwise tensor_locals, and sum() reductions\nthat fuse through chained tensor_locals without materialization).\n\nCloses the ~70-100 ns/iter interpreter-dispatch gap: on the benchmarks\nunder benchmarks/loop_jit/, numbl ties or beats MATLAB on every shape\n(1.04x to 5.9x depending on body complexity).\n\nCorrectness:\n- Tensor_locals materialize their last-iteration value to a caller-\n  allocated buffer (guarded if(__iv == hi)) and get written back to env\n  so MATLAB post-loop visibility is preserved.\n- Bails on cross-iter deps (tensor input reassigned in body, duplicate\n  tensor_local writes, tensor_local elemExpr referencing a later-declared\n  tensor_local).\n- tensorInoutVars are unshared before the kernel mutates them, so\n  function-parameter COW semantics work when the caller's tensor is\n  shared.\n\nStructure:\n- loopKernel.ts: driver (validation, lowering, classification, marshal).\n- loopKernelEmit.ts: C source emission, following the chainKernelEmit.ts\n  pattern.\n- astToJitExpr.ts gains an Index case and an opt-in\n  resolveFuncCallAsTensorIndex lower option for MATLAB's `x(i)` tensor-\n  index syntax (which parses as FuncCall).\n- fusedScalarEmit.ts gains an optional tensorScalarIndexRead on\n  FusedTarget + an Index case.",
          "timestamp": "2026-04-24T14:36:09-04:00",
          "tree_id": "5c934d29bef6defd54b1b8647383626fbdbe06d9",
          "url": "https://github.com/flatironinstitute/numbl/commit/b0de4ac63df87962cd1ccf1f2ca8419b205e3245"
        },
        "date": 1777056740691,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "scalar_bench / elapsed / opt-1",
            "value": 0.4594,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4581, 0.4722, 0.4594]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1",
            "value": 0.1242,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1193, 0.1242, 0.1494]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e1-par",
            "value": 0.1243,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1143, 0.1245, 0.1243]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2",
            "value": 0.1462,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1462, 0.1500, 0.1403]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "scalar_bench / elapsed / opt-e2-par",
            "value": 0.1284,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1470, 0.1277, 0.1284]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-1",
            "value": 0.415,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5383, 0.4150, 0.4095]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1",
            "value": 0.0462,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0446, 0.0462, 0.0464]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e1-par",
            "value": 0.0507,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0478, 0.0616, 0.0507]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2",
            "value": 0.0512,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0468, 0.0512, 0.0539]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_scalar_bench / elapsed / opt-e2-par",
            "value": 0.0586,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0517, 0.0586, 0.0645]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-1",
            "value": 0.523,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4210, 0.5230, 0.5460]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-1",
            "value": 0.974,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9740, 1.0160, 0.9100]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-1",
            "value": 0.808,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8030, 0.8080, 0.9190]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-1",
            "value": 0.211,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2310, 0.2110, 0.2080]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-1",
            "value": 2.578,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.4420, 2.5780, 2.9950]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-1",
            "value": 5.136,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.8700, 5.1360, 5.5780]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1",
            "value": 0.06,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0460, 0.0900, 0.0600]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1",
            "value": 0.295,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2950, 0.2950, 0.3080]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1",
            "value": 0.15,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1630, 0.1500, 0.1490]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1",
            "value": 0.147,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1470, 0.1430, 0.1500]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1",
            "value": 1.962,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0250, 1.9620, 1.8770]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1",
            "value": 2.64,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.6770, 2.6400, 2.5440]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e1-par",
            "value": 0.062,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0500, 0.0620, 0.0700]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e1-par",
            "value": 0.351,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3510, 0.3240, 0.4070]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e1-par",
            "value": 0.182,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1770, 0.1820, 0.1910]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e1-par",
            "value": 0.028,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0270, 0.0280, 0.0360]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e1-par",
            "value": 0.969,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7660, 0.9690, 1.0200]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e1-par",
            "value": 1.565,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3700, 1.5650, 1.7250]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2",
            "value": 0.079,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0790, 0.0920, 0.0780]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2",
            "value": 0.483,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6400, 0.4400, 0.4830]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2",
            "value": 0.442,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6820, 0.4420, 0.4200]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2",
            "value": 0.402,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4580, 0.3760, 0.4020]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2",
            "value": 2.462,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.6600, 2.4620, 1.8340]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2",
            "value": 3.812,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.5200, 3.8120, 3.2160]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Binary / opt-e2-par",
            "value": 0.066,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0640, 0.0770, 0.0660]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Chain / opt-e2-par",
            "value": 0.308,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2740, 0.3180, 0.3080]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / CmpRed / opt-e2-par",
            "value": 0.405,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4650, 0.4050, 0.3620]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Reduce / opt-e2-par",
            "value": 0.268,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3130, 0.2680, 0.2560]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / Unary / opt-e2-par",
            "value": 0.684,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9290, 0.6840, 0.6570]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench / total / opt-e2-par",
            "value": 1.752,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.0440, 1.7520, 1.6490]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-1",
            "value": 0.769,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7360, 0.7690, 0.8040]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-1",
            "value": 8.009,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.0090, 8.1370, 7.0590]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-1",
            "value": 8.894,
            "unit": "s",
            "extra": "median of 3/3 runs: [8.7020, 9.3970, 8.8940]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-1",
            "value": 0.661,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6610, 0.6620, 0.5750]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-1",
            "value": 0.266,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3060, 0.2660, 0.2230]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-1",
            "value": 2.191,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8390, 2.2610, 2.1910]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-1",
            "value": 20.253,
            "unit": "s",
            "extra": "median of 3/3 runs: [20.2530, 21.4920, 19.7460]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1",
            "value": 0.399,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3880, 0.3990, 0.4830]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1",
            "value": 1.339,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.3390, 1.3300, 1.3890]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1",
            "value": 0.375,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3600, 0.3750, 0.3800]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1",
            "value": 0.368,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3660, 0.3680, 0.4110]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1",
            "value": 0.049,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0480, 0.0520, 0.0490]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1",
            "value": 2.026,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8780, 2.0260, 2.1360]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1",
            "value": 4.55,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.3790, 4.5500, 4.8480]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e1-par",
            "value": 0.426,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4260, 0.3380, 0.4540]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e1-par",
            "value": 0.538,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6150, 0.3380, 0.5380]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e1-par",
            "value": 0.16,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2130, 0.1520, 0.1600]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e1-par",
            "value": 0.173,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2150, 0.1730, 0.1110]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e1-par",
            "value": 0.064,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0770, 0.0640, 0.0640]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e1-par",
            "value": 0.857,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8570, 0.9980, 0.6810]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e1-par",
            "value": 2.064,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.4020, 2.0640, 2.0080]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2",
            "value": 0.323,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3230, 0.3320, 0.3200]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2",
            "value": 1.142,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.1420, 1.3420, 1.0780]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2",
            "value": 0.236,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2220, 0.2750, 0.2360]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2",
            "value": 0.01,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0080, 0.0100, 0.0100]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2",
            "value": 0.054,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0420, 0.0540, 0.0640]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2",
            "value": 0.039,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0360, 0.0390, 0.0390]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2",
            "value": 1.772,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.7720, 2.0520, 1.7470]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / AccRed / opt-e2-par",
            "value": 0.15,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1070, 0.2720, 0.1500]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / BinOps / opt-e2-par",
            "value": 0.444,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4740, 0.4250, 0.4440]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Clamp / opt-e2-par",
            "value": 0.102,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1740, 0.0760, 0.1020]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Gauss / opt-e2-par",
            "value": 0.009,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0080, 0.0120, 0.0090]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / InlRed / opt-e2-par",
            "value": 0.076,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0720, 0.0840, 0.0760]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / Nested / opt-e2-par",
            "value": 0.043,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0440, 0.0430, 0.0340]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "tensor_ops_bench2 / total / opt-e2-par",
            "value": 0.879,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8790, 0.9110, 0.8150]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-1",
            "value": 0.088,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0820, 0.0880, 0.0890]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-1",
            "value": 0.127,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1180, 0.1270, 0.1290]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-1",
            "value": 0.312,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2800, 0.3190, 0.3120]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-1",
            "value": 0.087,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0770, 0.0870, 0.0890]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-1",
            "value": 0.051,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0430, 0.0510, 0.0530]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-1",
            "value": 0.157,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1560, 0.1570, 0.1580]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-1",
            "value": 0.829,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.7570, 0.8290, 0.8310]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1",
            "value": 0.033,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0320, 0.0430, 0.0330]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1",
            "value": 0.075,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0620, 0.0830, 0.0750]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1",
            "value": 0.057,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0580, 0.0570, 0.0400]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1",
            "value": 0.038,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0380, 0.0360, 0.0510]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1",
            "value": 0.071,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0710, 0.0840, 0.0540]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1",
            "value": 0.171,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1710, 0.1680, 0.1750]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1",
            "value": 0.431,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4310, 0.4700, 0.4260]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e1-par",
            "value": 0.026,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0260, 0.0250, 0.0280]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e1-par",
            "value": 0.073,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0650, 0.0880, 0.0730]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e1-par",
            "value": 0.049,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0400, 0.0520, 0.0490]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e1-par",
            "value": 0.025,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0250, 0.0330, 0.0240]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e1-par",
            "value": 0.072,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0580, 0.0720, 0.0760]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e1-par",
            "value": 0.17,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1700, 0.1750, 0.1640]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e1-par",
            "value": 0.415,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3840, 0.4450, 0.4150]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2",
            "value": 0.043,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0350, 0.0430, 0.0670]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2",
            "value": 0.075,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0640, 0.0750, 0.1060]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2",
            "value": 0.045,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0440, 0.0450, 0.0650]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2",
            "value": 0.054,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0700, 0.0350, 0.0540]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2",
            "value": 0.153,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1530, 0.1430, 0.1620]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2",
            "value": 0.249,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2530, 0.2080, 0.2490]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2",
            "value": 0.618,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.6180, 0.5490, 0.7040]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k1_mandelbrot / opt-e2-par",
            "value": 0.056,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0670, 0.0410, 0.0560]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k2_tensor_chain / opt-e2-par",
            "value": 0.128,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1280, 0.0910, 0.1310]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k3_conj_chain / opt-e2-par",
            "value": 0.078,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.1040, 0.0780, 0.0650]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k4_widening / opt-e2-par",
            "value": 0.045,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.0370, 0.0450, 0.0450]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k5_divide / opt-e2-par",
            "value": 0.185,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.2030, 0.1430, 0.1850]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / k6_abs_reduce / opt-e2-par",
            "value": 0.281,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.3220, 0.2810, 0.2660]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "complex_tensor_bench / total / opt-e2-par",
            "value": 0.748,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8600, 0.6790, 0.7480]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-1",
            "value": 5.065552,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.0315, 5.0656, 4.3103]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-1",
            "value": 0.476898,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.4769, 0.4643, 0.4847]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-1",
            "value": 3.257402,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.2541, 3.2574, 3.8844]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-1",
            "value": 11.486523,
            "unit": "s",
            "extra": "median of 3/3 runs: [12.3933, 11.4541, 11.4865]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-1",
            "value": 0.877079,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.8283, 0.9208, 0.8771]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-1",
            "value": 1.463995,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5080, 1.4414, 1.4640]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1",
            "value": 4.293747,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.7451, 4.2937, 4.2496]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1",
            "value": 0.50815,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5081, 0.5228, 0.4878]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1",
            "value": 3.433913,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.4339, 3.7762, 3.1846]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1",
            "value": 11.39682,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.6614, 11.3968, 10.9575]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1",
            "value": 1.033552,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9690, 1.0336, 1.0659]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1",
            "value": 1.533499,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5335, 1.4028, 1.6010]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e1-par",
            "value": 4.066776,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.0668, 3.8737, 4.4628]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e1-par",
            "value": 0.455427,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.5027, 0.4463, 0.4554]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e1-par",
            "value": 3.463686,
            "unit": "s",
            "extra": "median of 3/3 runs: [3.6705, 3.0207, 3.4637]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e1-par",
            "value": 10.997699,
            "unit": "s",
            "extra": "median of 3/3 runs: [11.0356, 10.1036, 10.9977]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e1-par",
            "value": 0.902188,
            "unit": "s",
            "extra": "median of 3/3 runs: [0.9263, 0.9022, 0.8599]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e1-par",
            "value": 1.46718,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.4672, 1.5112, 1.4478]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2",
            "value": 6.021811,
            "unit": "s",
            "extra": "median of 3/3 runs: [6.0218, 5.6041, 7.0507]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2",
            "value": 1.863992,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.8640, 1.5001, 2.1477]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e2",
            "value": 12.837712,
            "unit": "s",
            "extra": "median of 3/3 runs: [12.8377, 11.9465, 15.3342]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e2",
            "value": 26.791901,
            "unit": "s",
            "extra": "median of 3/3 runs: [26.7919, 24.6396, 31.4939]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e2",
            "value": 4.178772,
            "unit": "s",
            "extra": "median of 3/3 runs: [4.1788, 3.8392, 4.6709]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2",
            "value": 1.525839,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5258, 1.3842, 1.8274]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / build_matrix / opt-e2-par",
            "value": 7.498215,
            "unit": "s",
            "extra": "median of 3/3 runs: [7.2806, 7.4982, 7.5107]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / discretize / opt-e2-par",
            "value": 2.010981,
            "unit": "s",
            "extra": "median of 3/3 runs: [1.5762, 2.0110, 2.1191]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / eval / opt-e2-par",
            "value": 15.244744,
            "unit": "s",
            "extra": "median of 3/3 runs: [14.0348, 15.3310, 15.2447]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / execution / opt-e2-par",
            "value": 32.062613,
            "unit": "s",
            "extra": "median of 3/3 runs: [31.0551, 32.3132, 32.0626]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / interior / opt-e2-par",
            "value": 4.904577,
            "unit": "s",
            "extra": "median of 3/3 runs: [5.4658, 4.9046, 4.8436]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          },
          {
            "name": "chunkie_helmholtz_starfish / solve / opt-e2-par",
            "value": 2.039434,
            "unit": "s",
            "extra": "median of 3/3 runs: [2.1914, 2.0394, 1.8713]\nOS: darwin 24.6.0 (arm64)\nCPU: Apple M1 (Virtual) (3 cores)\nRAM: 7 GB\nNode: v20.20.2\ncc: Apple clang version 17.0.0 (clang-1700.0.13.5)\n--par cc: gcc-14\nRunner: macOS macos15 20260421.0007.1"
          }
        ]
      }
    ]
  }
}