import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';
import { Ripple } from '../ripple/Ripple';

export class GrowlMessage extends Component {

    static defaultProps = {
        message: null,
        onClose: null,
        onClick: null
    }

    static propTypes = {
        message: PropTypes.object,
        onClose: PropTypes.func,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    componentDidMount() {
        if (!this.props.message.sticky) {
            this.timeout = setTimeout(() => {
                this.onClose(null);
            }, this.props.message.life || 3000);
        }
    }

    onClose() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        if (this.props.onClose) {
            this.props.onClose(this.props.message);
        }
    }

    onClick(event) {
        if (this.props.onClick && !(DomHandler.hasClass(event.target, 'p-toast-icon-close') || DomHandler.hasClass(event.target, 'p-growl-icon-close-icon'))) {
            this.props.onClick(this.props.message);
        }
    }

    renderCloseIcon() {
        if (this.props.message.closable !== false) {
            return (
                <button type="button" className="p-toast-icon-close p-link" onClick={this.onClose}>
                    <span className="p-toast-icon-close-icon pi pi-times"></span>
                    <Ripple />
                </button>
            );
        }

        return null;
    }

    renderMessage() {
        if (this.props.message) {
            const { severity, content, summary, detail } = this.props.message;
            let iconClassName = classNames('p-toast-message-icon pi', {
                'pi-info-circle': severity === 'info',
                'pi-exclamation-triangle': severity === 'warn',
                'pi-times': severity === 'error',
                'pi-check': severity === 'success'
            });

            return content || (
                <>
                    <span className={iconClassName}></span>
                    <div className="p-toast-message-text">
                        <span className="p-toast-summary">{summary}</span>
                        {detail && <div className="p-toast-detail">{detail}</div>}
                    </div>
                </>
            )
        }

        return null;
    }

    render() {
        const severity = this.props.message.severity;
        const className = classNames('p-toast-message', {
            'p-toast-message-info': severity === 'info',
            'p-toast-message-warn': severity === 'warn',
            'p-toast-message-error': severity === 'error',
            'p-toast-message-success': severity === 'success'
        });
        const message = this.renderMessage();
        const closeIcon = this.renderCloseIcon();

        return (
            <div ref={(el) => { this.element = el; }} className={className} role="alert" aria-live="assertive" aria-atomic="true" onClick={this.onClick}>
                <div className="p-toast-message-content">
                    {message}
                    {closeIcon}
                </div>
            </div>
        );
    }
}
