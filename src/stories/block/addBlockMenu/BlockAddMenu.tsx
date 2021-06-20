import React from 'react';
import classNames from 'classnames';
import './index.css';

interface AddBlockMenuList {
  type: string;
  name: string;
  detail: string;
}

interface ListElementProps extends AddBlockMenuList {
  addBlockEvent: any;
}

const ListElement: React.FC<ListElementProps> = ({ type, name, detail, addBlockEvent }) => {

  const handleClick = () => {
    addBlockEvent(type)
  }

  return (
    <li 
      className="add-menu-list" 
      onClick={handleClick}
    >
      <h2> { name } </h2>
      <p> { detail } </p>
    </li>
  )
}

interface MenuElementProps {
  className: string;
  title: string;
  list: AddBlockMenuList[];
  addBlockEvent: any;
}

const MenuElement: React.FC<MenuElementProps> = ({
  className,
  title,
  list,
  addBlockEvent
}) => {
  return (
    <div className={classNames("block-add-menu", className)}>
      <h1 className="block-add-menu-title">{ title }</h1>
      
      {
        list.map((li, idx) => 
          <ListElement
            key={idx} 
            type={li.type} 
            name={li.name} 
            detail={li.detail} 
            addBlockEvent={addBlockEvent} 
          />
        )
      }

    </div>
  )
}

interface MenuProps {
  title: string;
  className: string;
  list: AddBlockMenuList[];
}

const ADD_MENU: MenuProps[]  = JSON.parse(`[
  {
    "title": "Blocks menu",
    "className": "blocks",
    "list": [
      {
        "type": "Text",
        "name": "기본 텍스트"
      },
      {
        "type": "h1",
        "name": "h1 텍스트"
      },
      {
        "type": "h2",
        "name": "h2 텍스트"
      },
      {
        "type": "h3",
        "name": "h3 텍스트"
      }
    ]
  },
  {
    "title": "Blocks menu",
    "className": "blocks",
    "list": [
      {
        "type": "Text",
        "name": "기본 텍스트"
      },
      {
        "type": "h1",
        "name": "h1 텍스트"
      },
      {
        "type": "h2",
        "name": "h2 텍스트"
      },
      {
        "type": "h3",
        "name": "h3 텍스트"
      }
    ]
  }
]`);

export interface BlockAddMenuProps {
  addBlockEvent: any;
}

const BlockAddMenu: React.FC<BlockAddMenuProps> = ({ addBlockEvent }) => {

  return (
    <div className="block-add-menu">
      <div className="container">

        {
          ADD_MENU.map((menu, idx)=> 
            <MenuElement 
              key={idx}
              className={menu.className}  
              title={menu.title}
              list={menu.list}
              addBlockEvent={addBlockEvent}
            />
          )
        }

      </div>
      
    </div>
  )
}

export default BlockAddMenu;