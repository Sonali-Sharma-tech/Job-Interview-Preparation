export class TaskDetailsModel {
    constructor(
      public taskName: string,
      public tagNames: Array<string> = [],
      public comments: string,
      public rating: Number,
    ) {}
  }
