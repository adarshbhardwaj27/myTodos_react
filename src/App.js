import './App.css';
import { Navbar } from './Components/Navbar';
import { TodoList } from './Components/TodoList';
import { Footer } from './Components/Footer';
import { useState } from 'react';
import { AddTodo } from './Components/AddTodo';

function App() {
  const [todos, setTodos] = useState([
    {
      "sno": 1,
      "title": "Apple",
      "desc": "An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. ",
    },
    {
      "sno": 2,
      "title": "Mango",
      "desc": "A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated between northwestern Myanmar, Bangladesh, and northeastern India.",
    },
    {
      "sno": 3,
      "title": "Guava",
      "desc": "guava, (Psidium guajava), small tropical tree or shrub of the family Myrtaceae, cultivated for its edible fruits. Guava trees are native to tropical America and are grown in tropical and subtropical areas worldwide. Guava fruits are processed into jams, jellies, and preserves and are common pastry fillings.",
    },

  ])

  let todoDel = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }

  let addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos.length + 1;
    }
    const myTodo = {
      "sno": sno,
      "title": title,
      "desc": desc,
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }


  return (
    <>
      <Navbar />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} todoDel={todoDel} />
      <Footer />
    </>
  );
}

export default App;
