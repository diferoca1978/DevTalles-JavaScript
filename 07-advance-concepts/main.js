import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { callbackComponent } from './src/concepts/02-callbacks.js';
import { promisesComponent } from './src/concepts/03-promises.js';
import { raceComponet } from './src/concepts/04-promise-race-component.js';
import { asyncComponent } from './src/concepts/05-async.js';
import { asyncAwaitComponent } from './src/concepts/06-async-await.js';
import { asyncAwaitEnhanced } from './src/concepts/07-async-await-enhanced.js';
import { generatorFunctionsComponent } from './src/concepts/08-generator-function.js';
import { generatorsAsyncComponent } from './src/concepts/09-generator-function-async.js';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
    
  </div>
`;

const element = document.querySelector('.card');

// callbackComponent( element );
// promisesComponent (element);
// raceComponet(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
// asyncAwaitEnhanced(element);
// generatorFunctionsComponent(element);
generatorsAsyncComponent(element);


