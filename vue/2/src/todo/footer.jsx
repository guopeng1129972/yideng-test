/* jshint esversion: 6 */
import '../assets/styles/footer.styl'
export default{
  data(){
    return {
      author:"peng"
    }
  },
  render(){
    return (
      <div id="footer">
        <span>Writter by {this.author}</span>
      </div>
    )
  }
}