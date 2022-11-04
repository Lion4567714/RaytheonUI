// App.tsx represents what is happening on this page. In this case, http://localhost:3000/

import React from 'react';
import { TextField } from "./resources/TextField";
import Chart from "./resources/Chart";

const App: React.FC = () => {
    return (
        <div>
          <TextField />
          <Chart />
        </div>
    );
};

export default App;
