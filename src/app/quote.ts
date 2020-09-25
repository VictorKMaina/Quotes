export class Quote {

    constructor(public id: number, public quote: string, public upvote: number, public downvote: number, public submitter?: string, public author?: string){
        this.upvote = 0;
        this.downvote = 0;
    }
}
