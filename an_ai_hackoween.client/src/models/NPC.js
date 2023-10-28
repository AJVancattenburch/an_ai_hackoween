export class Room {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.knowsName = data.knowsName
    this.description = data.description
    this.likes = data.likes
    this.dislikes = data.dislikes
    this.knowsOpinion = data.knowsOpinion
  }
}
