import Image from "next/image";

const categories = {
  tools: [
    {
      linkName: "Calculator",
      linkRef: "/calc"
    },
    {
      linkName: "Pomodoro Timer",
      linkRef: "/pomo"
    },
    {
      linkName: "To Do List",
      linkRef: "/todolist"
    },
  ],
  products: [
    {
      linkName: "Shoe Laces",
      linkRef: "/shoelaces"
    },
    {
      linkName: "Furniture",
      linkRef: "/pomo"
    },
  ],
  social: [
    {
      linkName: "FaceBook",
      linkRef: "https://facebook.com"
    },
    {
      linkName: "LinkedIn",
      linkRef: "https://linkedin.com"
    },
  ]
};

function CategoryMenu(props) {
  // console.log(props.aCategory);
  let items = props.aCategory.map((item, key) => {
    return <li key={key}><a href={item.linkRef}>{item.linkName}</a></li>
  });
  // console.log(items);
  return <ul
    className="outline p-3"
  >{items}</ul>
}

function NavBar() {
  return (
    <nav 
      className="flex gap-5"
    >
      
      <CategoryMenu aCategory={categories.tools}/>
      <CategoryMenu aCategory={categories.social}/>
    </nav>
  )
}

export default NavBar;