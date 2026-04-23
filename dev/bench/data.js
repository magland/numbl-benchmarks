window.BENCHMARK_DATA = {
  "lastUpdate": 1776974773882,
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
      }
    ]
  }
}