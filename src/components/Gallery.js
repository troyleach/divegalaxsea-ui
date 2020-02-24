// TODO: note this is BAD PRACTICE committing a file that does not have
// anything to do with the PR.. but I am lazy!
// NOTE: this did work but not for what I wanted. but I am keeping it in the
// PR for the Gallery.
// https://www.npmjs.com/package/fslightbox-react
// https://fslightbox.com/react/documentation/basic
import React, {
  useState
} from 'react';

import FsLightbox from 'fslightbox-react';


export default function Gallery(props) {
  const [toggler, setToggler] = useState(false);
  console.log('here are the props in weather', props)


  return (
    <div className='gallery-container'>
      this is the gallery YO
      <button onClick={() => setToggler(!toggler)}>
        Toggle Lightbox
</button>
      <FsLightbox
        toggler={toggler}
        sources={[
          'images/random-image.jpg',
          'https://i.imgur.com/fsyrScY.jpg',
          'https://www.youtube.com/watch?v=xshEZzpS4CQ',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        ]}
      />
    </div>
  );
}