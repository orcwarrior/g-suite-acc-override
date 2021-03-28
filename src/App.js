import React from "react";

import {Header} from "./components/Header";
import {Container} from "./components/Container";
import {Accounts} from "./components/Accounts";

function App() {
    return (
        <Container>
          <Header/>
          <Accounts/>

            <div className="flex align-bottom justify-end">
                <p className="text-xsm font-light italic text-gray-500 m-2">
                    Stuck together by Dariusz Kobuszewski | GitHub
                </p>
            </div>
        </Container>
    );
}

export default App;
