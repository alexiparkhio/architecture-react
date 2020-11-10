import {
  Header,
  Randomizer
} from './components';
import {
  MainComponent,
  Text
} from './components/shared';

function App() {
  return (<>
    <MainComponent>
      <Header>
        <Text>This is some text.</Text>
      </Header>
      <Randomizer message="Click me" />
    </MainComponent>
  </>);
}

export default App;
