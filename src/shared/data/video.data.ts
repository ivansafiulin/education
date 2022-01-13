import { IVideo } from '../../pages/models/interfaces/video.interface';

export const videos: ReadonlyArray<IVideo> = [
  { id: 1, src: 'https://www.youtube.com/watch?v=1Iby7QmvHVw', isLoading: true },
  { id: 2, src: 'https://www.youtube.com/watch?v=IiCKV0o8gD4', isLoading: true },
  { id: 3, src: 'https://www.youtube.com/watch?v=b01KTadJTBI', isLoading: true },
  { id: 4, src: 'https://www.youtube.com/watch?v=do5p5ynpzF0', isLoading: true, isMain: true},
];
