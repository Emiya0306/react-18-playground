import React, { PureComponent } from 'react';

import { ModelContext, ModelContextType } from './Model';
import { UserContext, UserContextType } from './User';

type Props = {};

interface ContextedProps extends Props {
  modelContext: ModelContextType;
  userContext: UserContextType;
}

export class Class extends PureComponent<ContextedProps> {
  handleSetModel = () => {
    const { modelContext } = this.props;
    const [, modelActions] = modelContext;

    modelActions.setName('name');
    modelActions.setDescription('description');
    setTimeout(() => {
      modelActions.setStatus('NORMAL');
      modelActions.setTables(['table1', 'table2']);
    });
  }

  handleSetUser = () => {
    const { userContext } = this.props;
    const [, userActions] = userContext;

    userActions.setUsername('name');
    userActions.setDescription('description');
    setTimeout(() => {
      userActions.setStatus('NORMAL');
      userActions.setFriends(['table1', 'table2']);
    });
  }

  render() {
    const { modelContext, userContext } = this.props;
    const [model] = modelContext;
    const [user] = userContext;

    console.log('render!');
    return (
      <>
        <div>Class</div>
        <div>
          <div>{JSON.stringify(model)}</div>
          <div>{JSON.stringify(user)}</div>
          <button onClick={this.handleSetModel}>Set Model</button>
          <button onClick={this.handleSetUser}>Set User</button>
        </div>
      </>
    );
  }
}

export default function Container(props: Props) {
  return (
    <ModelContext.Consumer>
      {modelContext => (
        <UserContext.Consumer>
          {userContext => modelContext && userContext && (
            <Class modelContext={modelContext} userContext={userContext} {...props} />
          )}
        </UserContext.Consumer>
      )}
    </ModelContext.Consumer>
  );
};
