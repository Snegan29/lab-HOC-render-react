import './App.css';
import LikeImage from './components/LikeImage';
import LikeImage1 from './components/LikeImage1';
import LikePost from './components/LikePost';
import LikePost1 from './components/LikePost1';
import RenderProps from './components/RenderProps';

function App() {
  return (
    <div>
      <div>
        {/* Higher Order Component */}
        <h3>Some </h3>
        <LikeImage/>
        <LikePost/>
      </div>
      <div>
        {/* Render Props */}
        <h3>Some Blog</h3>
        <RenderProps render = {(count,handleCount)=> <LikeImage1 count = {count} handleCount = {handleCount} />} />
        <RenderProps render = {(count,handleCount)=> <LikePost1 count = {count} handleCount = {handleCount} />} />
      </div>
    </div>
  );
}

export default App;
