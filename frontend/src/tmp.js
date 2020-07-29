return (
  <div className="page-container">
    <div className="content-wrap">
        <Router>
        {user === null ?
          <LogInBlock setUser={setUser}/> :
          <div>
            <TopBlock renderAbout={renderAbout} buttonText="isLoggedIn" setUser={setUser}/>
            <Recipes recipes={recipes}/>
          </div>
        }
         {/*<SignUpBlock/>*/}
          {/*<TopBlock renderAbout={renderAbout} buttonText="isLoggedIn"/>*/}
          {/* <About/>*/}
         {/* <LoggedInBlock/>*/}
          {/*<Recipes recipes={recipes}/>*/}
        </Router>
      </div>
      <Footer setRenderAbout={setRenderAbout}/>
  </div>
)