import "./App.css";

function Sidebar() {
  return (
    <div id="sidebar">
      <h2> Navigation</h2>
      <span>x</span>
      <span>y</span>
    </div>
  );
}

function Dashboard() {
  return (
    <div id="dashboard">
      <h2>Student Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet
        nulla vitae suscipit finibus. Cras fermentum, lacus quis fringilla
        congue, nunc mi dictum est, ac congue metus arcu eget arcu. Mauris
        aliquet enim ante, ut euismod mauris mattis ut. Integer turpis nunc,
        sagittis eget efficitur at, tincidunt eu lorem. In commodo pulvinar
        metus, id porttitor lectus vulputate eu. Aliquam lorem dui, ullamcorper
        vitae pharetra ac, pulvinar ut orci. Aliquam accumsan arcu in vehicula
        viverra. Proin vehicula felis vel eleifend dapibus. Nunc interdum
        ullamcorper erat, vel scelerisque risus. Nullam gravida urna felis, a
        convallis nisi vehicula ac. Proin non sapien convallis arcu pulvinar
        posuere. Vestibulum pellentesque placerat ante quis venenatis. Etiam in
        pretium quam. Donec bibendum nisi vel congue pulvinar. Praesent eu
        tincidunt erat. Suspendisse pulvinar, quam ac blandit congue, arcu sem
        porta odio, at egestas ex ipsum quis sapien. Suspendisse tempor volutpat
        ligula, a fringilla augue suscipit eu. Maecenas augue ex, viverra eget
        diam eget, fermentum ultricies leo. Suspendisse at eros nulla. Nunc
        aliquam dui at lectus ultricies, ac auctor nisl tristique. Sed eget
        porttitor odio, vel mattis risus. In at diam enim. Sed at justo dui.
        Integer rhoncus vestibulum nisl, ut rutrum nulla feugiat sit amet. In
        hac habitasse platea dictumst. Phasellus vel ornare tellus, id laoreet
        mi. Donec in condimentum libero. Nunc eu tempor lectus, quis dapibus
        nisl. Phasellus facilisis, orci ac hendrerit dapibus, massa ipsum
        efficitur sem, quis consequat tortor est a mi. Nulla placerat eros
        maximus nulla tristique pellentesque. Pellentesque vulputate ante nec
        sapien vulputate hendrerit. Donec at tristique nunc, et maximus nulla.
        Donec lorem nulla, lacinia et libero in, luctus aliquet sapien. Aliquam
        sapien ante, posuere non sem ut, venenatis iaculis odio. Mauris diam
        neque, pharetra vel elementum sit amet, ultrices vitae ante. Aenean
        posuere euismod sagittis. Nam placerat pretium velit eget placerat. Nam
        vitae justo et augue euismod bibendum ut at lorem. Aenean in metus
        pulvinar, placerat massa vel, finibus orci. Aliquam erat volutpat.
        Praesent volutpat vehicula odio vel feugiat. Donec ac condimentum urna.
        Integer urna felis, euismod pharetra urna nec, elementum laoreet massa.
        Mauris mollis, magna et pretium tempus, lacus purus semper eros, id
        laoreet nibh nunc sed neque. Nulla facilisi. Vestibulum laoreet semper
        velit, nec iaculis tellus posuere ac. Vivamus quis maximus metus, eget
        aliquet urna. Vivamus fermentum eleifend dui, vitae maximus urna dapibus
        eu. Mauris tristique ipsum mauris, id rutrum sapien sagittis eget.
        Phasellus lobortis cursus ultricies. Nam id imperdiet sem, vel sodales
        quam. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce elit mauris, luctus nec varius
        sed, porta ac lectus. Mauris condimentum turpis eu ex facilisis dictum.
      </p>
    </div>
  );
}

function RightPanel() {
  return <div id="right-panel"></div>;
}

function App() {
  return (
    <div id="dashboard-screen">
      <Sidebar />
      <Dashboard />

      <RightPanel />
    </div>
  );
}

export default App;
