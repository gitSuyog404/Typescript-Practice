// interface TakePhoto {
//   cameraMode: string;
//   filter: string;
//   burst: number;
// }

// The interface just tells that these things must be included
// If you are going to implement the above interface then you need to follow its protocol/guideline as well

// interface Story {
//   createStory(): void;
// }
// class Instagram implements TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number
//   ) {}
// }

// If you want to add more than what is necessary it is perfectly fine and you can add new things but you cannot add less things than what's a "MUST" in the given interface
// class Youtube implements TakePhoto, Story {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number,
//     public short: string
//   ) {}

//   createStory(): void {
//     console.log("Story was Created");
//   }
// }
