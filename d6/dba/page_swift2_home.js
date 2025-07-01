var page_swift2_home =
[
    [ "Signpost", "d6/dba/page_swift2_home.html#autotoc_md1109", null ],
    [ "Compile Peano4 For Swift2", "d6/dba/page_swift2_home.html#section_compile_peano4_for_swift2", [
      [ "Compile Swift2 with HDF5 enabled", "d6/dba/page_swift2_home.html#section_compile_swift2_with_hdf5", [
        [ "With Spack/containers", "d6/dba/page_swift2_home.html#autotoc_md1110", null ],
        [ "Ubuntu", "d6/dba/page_swift2_home.html#autotoc_md1111", null ],
        [ "Python", "d6/dba/page_swift2_home.html#section_swift2_python_hdf5", null ]
      ] ]
    ] ],
    [ "Equations for \"Minimal\" SPH", "d6/dba/page_swift2_home.html#autotoc_md1112", null ],
    [ "Bibliography", "d6/dba/page_swift2_home.html#autotoc_md1113", null ],
    [ "Terminology", "de/d8e/swift_terminology.html", [
      [ "SPH Terminology", "de/d8e/swift_terminology.html#autotoc_md1146", null ],
      [ "Internal Terminology", "de/d8e/swift_terminology.html#autotoc_md1147", null ]
    ] ],
    [ "Benchmarks", "d3/d24/swift_benchmarks.html", "d3/d24/swift_benchmarks" ],
    [ "Tests", "d9/d95/swift_tests.html", "d9/d95/swift_tests" ],
    [ "Tutorials", "d1/dad/swift_tutorials.html", "d1/dad/swift_tutorials" ],
    [ "Building your project from scratch", "d3/dac/swift_building_project_from_scratch.html", [
      [ "Introduction", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1089", null ],
      [ "Generating a swift2.project", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1090", null ],
      [ "Generating a Particle Species", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1091", [
        [ "Generating Particle Data Fields", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1092", null ],
        [ "Generating Particle Parameters", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1093", null ],
        [ "Generating the Particle Life Cycle", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1094", null ]
      ] ],
      [ "Setting Global Simulation Parameters", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1095", null ],
      [ "Special Steps", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1096", [
        [ "Initial Setup", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1097", [
          [ "Reading Initial Conditions", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1098", null ],
          [ "Inital Step", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1099", null ]
        ] ],
        [ "Writing Output", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1100", null ]
      ] ],
      [ "Building the Project", "d3/dac/swift_building_project_from_scratch.html#autotoc_md1101", null ]
    ] ],
    [ "Initial conditions, particle insertion and initial mesh construction", "d4/d9b/swift_initial_conditions.html", [
      [ "The initial (regular) mesh", "d4/d9b/swift_initial_conditions.html#autotoc_md1114", null ],
      [ "Initial conditions", "d4/d9b/swift_initial_conditions.html#autotoc_md1115", null ],
      [ "Insert particles from an HDF5 file", "d4/d9b/swift_initial_conditions.html#page_swift_initial_conditions_SwiftHDF5", null ],
      [ "General remarks on particle insertion", "d4/d9b/swift_initial_conditions.html#autotoc_md1116", null ]
    ] ],
    [ "Boundary conditions and solver coupling", "d9/de5/swift_boundary_conditions.html", [
      [ "Periodic boundary conditions", "d9/de5/swift_boundary_conditions.html#autotoc_md1084", null ],
      [ "Other boundary conditions", "d9/de5/swift_boundary_conditions.html#autotoc_md1085", [
        [ "Plug into each and every grid sweep", "d9/de5/swift_boundary_conditions.html#autotoc_md1086", null ],
        [ "Plug into the particle drifts", "d9/de5/swift_boundary_conditions.html#autotoc_md1087", null ]
      ] ],
      [ "Solver coupling", "d9/de5/swift_boundary_conditions.html#autotoc_md1088", null ]
    ] ],
    [ "Creating new particle types (solvers) with new algorithmic steps", "d2/daf/swift_particle_new_solver.html", [
      [ "Introduce a new particle type", "d2/daf/swift_particle_new_solver.html#autotoc_md1117", [
        [ "Declaring particle attributes", "d2/daf/swift_particle_new_solver.html#autotoc_md1118", null ],
        [ "The algorithmic steps for the particle life cycle", "d2/daf/swift_particle_new_solver.html#autotoc_md1119", [
          [ "The algorithmic steps for the particle initialisation", "d2/daf/swift_particle_new_solver.html#Section_SwiftAlgorithmStepsInitialization", null ],
          [ "Remarks on particular particle update steps", "d2/daf/swift_particle_new_solver.html#autotoc_md1120", [
            [ "Drifts (movements)", "d2/daf/swift_particle_new_solver.html#autotoc_md1121", null ],
            [ "Interaction range calculation", "d2/daf/swift_particle_new_solver.html#autotoc_md1122", null ],
            [ "Multiscale interactions", "d2/daf/swift_particle_new_solver.html#autotoc_md1123", null ],
            [ "Reruns of steps", "d2/daf/swift_particle_new_solver.html#autotoc_md1124", null ],
            [ "Iterators", "d2/daf/swift_particle_new_solver.html#autotoc_md1125", null ]
          ] ]
        ] ]
      ] ],
      [ "New solver kernels (physics)", "d2/daf/swift_particle_new_solver.html#autotoc_md1126", null ],
      [ "Cut-off radius realisation (e.g. in the force calculation)", "d2/daf/swift_particle_new_solver.html#autotoc_md1127", null ],
      [ "Tune a kernel realisation", "d2/daf/swift_particle_new_solver.html#autotoc_md1128", [
        [ "Move checks out of the kernels", "d2/daf/swift_particle_new_solver.html#autotoc_md1129", null ],
        [ "Step 2: Switch to a bespoke iterator", "d2/daf/swift_particle_new_solver.html#autotoc_md1130", null ],
        [ "Step X: Port kernels to GPUs", "d2/daf/swift_particle_new_solver.html#autotoc_md1131", null ],
        [ "Troubleshooting: The kernel does not vectorise despite all these steps", "d2/daf/swift_particle_new_solver.html#autotoc_md1132", [
          [ "Expose all particle attributes", "d2/daf/swift_particle_new_solver.html#autotoc_md1133", null ],
          [ "Validate impact of your work", "d2/daf/swift_particle_new_solver.html#autotoc_md1134", null ],
          [ "Tweak your C++ code", "d2/daf/swift_particle_new_solver.html#autotoc_md1135", null ]
        ] ]
      ] ]
    ] ],
    [ "Visualisation", "d3/d01/swift_visualisation.html", [
      [ "The Peano Way", "d3/d01/swift_visualisation.html#autotoc_md1151", null ],
      [ "Python support for vtu format", "d3/d01/swift_visualisation.html#autotoc_md1152", null ],
      [ "Particle database", "d3/d01/swift_visualisation.html#autotoc_md1153", null ],
      [ "Particle rearrangement stats", "d3/d01/swift_visualisation.html#autotoc_md1154", null ]
    ] ],
    [ "Architecture", "d5/d3d/swift_architecture.html", [
      [ "Abstraction levels", "d5/d3d/swift_architecture.html#autotoc_md1080", null ],
      [ "Particle storage and sorting", "d5/d3d/swift_architecture.html#autotoc_md1081", null ],
      [ "Particle-particle interaction", "d5/d3d/swift_architecture.html#autotoc_md1082", null ],
      [ "Relation between particle's search radius, the AMR, and the neighbour searches/interactions", "d5/d3d/swift_architecture.html#autotoc_md1083", null ]
    ] ],
    [ "Parallelisation", "dc/d3c/swift_parallelisation.html", [
      [ "Difference to the original Swift code", "dc/d3c/swift_parallelisation.html#autotoc_md1136", null ],
      [ "Non-overlapping domain decomposition", "dc/d3c/swift_parallelisation.html#autotoc_md1137", [
        [ "The subdomains per rank", "dc/d3c/swift_parallelisation.html#autotoc_md1138", null ]
      ] ],
      [ "Q&As", "dc/d3c/swift_parallelisation.html#autotoc_md1139", null ]
    ] ],
    [ "SWIFT's task graph compiler", "da/d44/swift_graph_compiler.html", [
      [ "Graph translator flavours", "da/d44/swift_graph_compiler.html#autotoc_md1105", [
        [ "A direct 1:1 mapping", "da/d44/swift_graph_compiler.html#autotoc_md1106", null ],
        [ "Task tree", "da/d44/swift_graph_compiler.html#autotoc_md1107", null ]
      ] ],
      [ "Different particle species", "da/d44/swift_graph_compiler.html#autotoc_md1108", null ]
    ] ],
    [ "Runtime analysis", "d0/dd8/swift_runtime_analysis.html", [
      [ "Peano data", "d0/dd8/swift_runtime_analysis.html#autotoc_md1145", null ]
    ] ],
    [ "Debugging Hints", "da/d3f/swift_debugging.html", [
      [ "On-the-fly Validation", "da/d3f/swift_debugging.html#autotoc_md1102", [
        [ "Dependency Checks", "da/d3f/swift_debugging.html#autotoc_md1103", null ],
        [ "Assignment Checks", "da/d3f/swift_debugging.html#autotoc_md1104", null ]
      ] ]
    ] ],
    [ "Performance optimisation", "d3/dc8/page_swift_performance_optimisation.html", [
      [ "Optimising the single core performance of individual species (vectorisation)", "d3/dc8/page_swift_performance_optimisation.html#autotoc_md1140", [
        [ "Step 1: Maintaining the active sets", "d3/dc8/page_swift_performance_optimisation.html#autotoc_md1141", null ],
        [ "Step 2: Storage of particles and maintaining the particle-mesh association", "d3/dc8/page_swift_performance_optimisation.html#autotoc_md1142", null ],
        [ "Step 3: Optimise the core kernels", "d3/dc8/page_swift_performance_optimisation.html#autotoc_md1143", null ]
      ] ]
    ] ]
];