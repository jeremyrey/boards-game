const Food = ({dot} : {dot : number[]}) => {
  const styleFood = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };
  return <div className="snake-food" style={styleFood}></div>;
}

export default Food;