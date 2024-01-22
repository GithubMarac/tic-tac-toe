import '../CSS/ticTacToe.css';

export default function Game() {
  return (
    <>
      <form id="tictactoe">
        <input type="radio" name="cell-0" id="cell-0-x" />
        <input type="radio" name="cell-0" id="cell-0-o" />
        <input type="radio" name="cell-1" id="cell-1-x" />
        <input type="radio" name="cell-1" id="cell-1-o" />
        <input type="radio" name="cell-2" id="cell-2-x" />
        <input type="radio" name="cell-2" id="cell-2-o" />
        <input type="radio" name="cell-3" id="cell-3-x" />
        <input type="radio" name="cell-3" id="cell-3-o" />
        <input type="radio" name="cell-4" id="cell-4-x" />
        <input type="radio" name="cell-4" id="cell-4-o" />
        <input type="radio" name="cell-5" id="cell-5-x" />
        <input type="radio" name="cell-5" id="cell-5-o" />
        <input type="radio" name="cell-6" id="cell-6-x" />
        <input type="radio" name="cell-6" id="cell-6-o" />
        <input type="radio" name="cell-7" id="cell-7-x" />
        <input type="radio" name="cell-7" id="cell-7-o" />
        <input type="radio" name="cell-8" id="cell-8-x" />
        <input type="radio" name="cell-8" id="cell-8-o" />

        <div id="board" className="center">
          <div className="tile" id="tile-0">
            <label htmlFor="cell-0-x"></label>
            <label htmlFor="cell-0-o"></label>
            <div></div>
          </div>
          <div className="tile" id="tile-1">
            <label htmlFor="cell-1-x"></label>
            <label htmlFor="cell-1-o"></label>
            <div></div>
          </div>
          <div className="tile" id="tile-2">
            <label htmlFor="cell-2-x"></label>
            <label htmlFor="cell-2-o"></label>
            <div></div>
          </div>
          <div className="tile" id="tile-3">
            <label htmlFor="cell-3-x"></label>
            <label htmlFor="cell-3-o"></label>
            <div></div>
          </div>
          <div className="tile" id="tile-4">
            <label htmlFor="cell-4-x"></label>
            <label htmlFor="cell-4-o"></label>
            <div></div>
          </div>
          <div className="tile" id="tile-5">
            <label htmlFor="cell-5-x"></label>
            <label htmlFor="cell-5-o"></label>
            <div></div>
          </div>
          <div className="tile" id="tile-6">
            <label htmlFor="cell-6-x"></label>
            <label htmlFor="cell-6-o"></label>
            <div></div>
          </div>
          <div className="tile" id="tile-7">
            <label htmlFor="cell-7-x"></label>
            <label htmlFor="cell-7-o"></label>
            <div></div>
          </div>
          <div className="tile" id="tile-8">
            <label htmlFor="cell-8-x"></label>
            <label htmlFor="cell-8-o"></label>
            <div></div>
          </div>
        </div>
        <div id="end">
          <div id="message" className="center">
            <div>
              <input type="reset" form="tictactoe" value="Play again" />
            </div>
          </div>
        </div>
      </form>

    </>
  );
};