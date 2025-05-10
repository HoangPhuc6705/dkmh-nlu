// Define the action type
type ToggleSidebarAction = {
  type: 'TOGGLE_SIDEBAR';
};

// Define the state type
type SidebarState = {
  isOpen: boolean;
};

// Initial state
const initialState: SidebarState = {
  isOpen: false,
};

// Reducer function
const toggleSidebarReducer = (
  state: SidebarState = initialState,
  action: ToggleSidebarAction
): SidebarState => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
export { initialState };
export default toggleSidebarReducer;