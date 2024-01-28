type History = {
  push: (route: string) => void;
};

function handleClick(history: History, route: string) {
  history?.push(route);
}

export default handleClick;
