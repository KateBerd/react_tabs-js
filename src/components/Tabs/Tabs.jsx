import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTab, onSelectedTab }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={classNames({ 'is-active': tab.title === selectedTab })}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => onSelectedTab(tab.title)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
