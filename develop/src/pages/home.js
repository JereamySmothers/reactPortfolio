import React from 'react';

//this is the home and about page in one
const Home = (currentCategory, setCurrentCategory) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <section>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus risus.
          Duis vel convallis est. In vehicula elementum mi commodo tincidunt. Vestibulum at
          nibh facilisis, rutrum lacus dictum, dignissim tellus. In hac habitasse platea
          dictumst. Pellentesque id mauris dui. Duis faucibus convallis vehicula. Morbi id
          fringilla diam, at aliquet dui. Mauris vulputate convallis dolor, a scelerisque
          lorem rutrum at. Nam tristique non felis et porta. Proin ullamcorper lorem urna,
          ut iaculis orci porta facilisis. Nam porta ipsum ut blandit tempor. Nunc facilisis
          aliquet libero, et hendrerit nisl volutpat eu. Nam ut tortor vel enim feugiat semper.
          Cras at elit aliquet, porttitor mi nec, viverra nisi. Phasellus posuere augue in
          mauris suscipit dignissim.
        </p>
      </section>
    </div>
  );
};

export default Home;