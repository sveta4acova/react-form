import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { ContentLayout, Progress } from '@components/presentationals/index';
import './style.scss';

class Content extends React.Component {
  static propTypes = {
    body: PropTypes.node.isRequired,
    progress: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    onContinue: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  };

  static defaultProps = {
    disabled: false,
  };

  renderHeader = () => {
    return <Progress data={this.props.progress} />;
  };

  renderFooter = () => {
    const { disabled, onContinue, onBack, progress } = this.props;

    return (
      <React.Fragment>
        <Button color="secondary" disabled={progress.current === 1} onClick={onBack}>
          Назад
        </Button>
        <Button color="secondary" disabled={disabled} onClick={onContinue}>
          Продолжить
        </Button>
      </React.Fragment>
    );
  };

  render() {
    const { body } = this.props;
    return (
      <div className="Registration">
        <h1 className="Registration__caption">Заявление на регистрацию</h1>
        <ContentLayout header={this.renderHeader()} footer={this.renderFooter()} body={body} />
      </div>
    );
  }
}

export default Content;
