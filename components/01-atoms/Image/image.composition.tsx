import React from 'react';
import { Image } from './image';

export const SingleSourceImage = () => (
  <Image
    alt="runner"
    src="https://www.womensrunning.com/wp-content/uploads/2021/09/CortneyWhite-Shalane-Flanagan-Training_2.jpg?crop=16:9"
  />
);

export const MultiSourceImage = () => (
  <Image
    alt="runner"
    sizes="(max-width: 600px), (min-width: 601px)"
    srcSet="https://www.womensrunning.com/wp-content/uploads/2021/09/CortneyWhite-Shalane-Flanagan-Training_2.jpg?crop=1:1, https://www.womensrunning.com/wp-content/uploads/2021/09/CortneyWhite-Shalane-Flanagan-Training_2.jpg?crop=16:9"
    src="https://www.womensrunning.com/wp-content/uploads/2021/09/CortneyWhite-Shalane-Flanagan-Training_2.jpg?crop=1:1, https://www.womensrunning.com/wp-content/uploads/2021/09/CortneyWhite-Shalane-Flanagan-Training_2.jpg?crop=16:9"
  />
);
