import { Quote } from '../../quote';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() quote: Quote;

  upVote(upvote){
    this.quote.upvote += 1;
    return this.quote.upvote;
  }
  downVote(downvote){
    this.quote.downvote += 1;
    return this.quote.downvote;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
