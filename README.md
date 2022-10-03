# reduxDrill

# 왜 리덕스를 사용하는가?
# 일단 리액트는 많은 컴포넌트로 나뉘어져있음
# 즉 계층화되고 구조화 되어있음 = > 재사용성이 용이하지만 상태관리가 어려움(각각의 스테이트를 가지고있기 때문)
# 리액트는 각각의 정보는 prop으로 넘겨보내준다. 
# 리덕스를 사용하면 어떤 정보를 한 곳에 저장하고 각각의 정보를 필요한 컴포넌트에서 사용할 수 있도록 한다.
# 리덕스는 component(화면을 보여줄 view) 와 store(정보를 저장하는 공간) 로 이루어짐 그러나 component에서 값이 변경될 때 store에 바로 업데이트 시키지는 않음 => action 과 reducer를 통해 값을 업데이트 됨
# 리덕스의 코어 컨셉 ㄱ
# component (dispatch) action (handle) reducer (update) store 이런식으로 이루어짐 