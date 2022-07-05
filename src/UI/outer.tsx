import Roact from '@rbxts/roact';
import ICommand from 'Types/ICommand';
const LocalPlayer = game.GetService('Players').LocalPlayer as Player;
export const DiscoverApropriateUIParent = ()=>{
  let PlayerGui: Instance | undefined;
  try { // Attempt to use gethui or CoreGUI
    PlayerGui = gethui ? gethui() : game.GetService('CoreGui');
  } catch (error) {}

  if (!PlayerGui)
    PlayerGui = LocalPlayer.FindFirstChildOfClass('PlayerGui'); // Default to PlayerGui

  return PlayerGui;
};
export const Mount = (Commands: ICommand[])=>{
  // Create the tree
  const tree = <screengui IgnoreGuiInset={true}>
    <frame BackgroundTransparency={1} Size={new UDim2(1, 0, 1, 0)} Position={new UDim2(0, 0, 0, 0)} Key={'FO Container'}>
      <frame Key='MainContainer' Size={new UDim2(0, 236, 0, 336)} AnchorPoint={new Vector2(1, 0)} Position={new UDim2(1, 0, 1, -36)}>

      </frame>
    </frame>
  </screengui>;
  // Mount it
  Roact.mount(tree, DiscoverApropriateUIParent(), tostring(math.random()));
};
