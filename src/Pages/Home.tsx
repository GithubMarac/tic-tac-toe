export default function Home() {
  return (
    <>
      <main>
        <div className='margin-auto'>
          <h2>Tic Tac Toe</h2>
          <form action="/">
            <input type="text" id="join" name="game_id"/>
            <input type="button" id="join_game"/>
            <input type="button" id="create_game"/>
          </form> 
        </div>
      </main>
    </>
  );
};