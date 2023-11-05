import { useState } from "react";

const useToggle = (isDefaultToggled?: boolean) => {
  const [isToggled, setIsToggled] = useState(isDefaultToggled ?? false);
  const toggle = (force?: boolean) => setIsToggled(prev => force ?? !prev);

  return [isToggled, toggle];
};

export default useToggle;
