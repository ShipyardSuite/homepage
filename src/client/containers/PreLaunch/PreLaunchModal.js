import React from 'react';
import {
    Button, 
    Modal, 
    Header, 
    Form, 
    Message
} from 'semantic-ui-react';

import { i18nManager } from '@shipyardsuite/i18n-manager';

import './PreLaunchModal.sass';

export default class PreLaunchModal extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            modalOpen: false,
            modalError: false,
            modalErrorMessages: [],
            modalFirstName: '',
            modalLastName: '',
            modalEmail: '',
            modalEmailSent: false
        };
        
        this.i18nManager = new i18nManager('en');
    }

    handleOpen()
    {
        this.setState({ modalOpen: true });
    }

    handleClose()
    {
        this.setState({ modalOpen: false });
    }

    handleInputChange(e) 
    {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleModal()
    {
        const { modalFirstName, modalLastName, modalEmail } = this.state;

        const modalErrorMessages = [];

        /**
         * @todo Add email form validation
         * @body Email should not only be checked for length, but also for validity of email address.
         */
        modalFirstName.length === 0 && modalErrorMessages.push(this.i18nManager.message('prelaunch.earlyAccessModal.error.firstName'));
        modalLastName.length === 0 && modalErrorMessages.push(this.i18nManager.message('prelaunch.earlyAccessModal.error.lastName'));
        modalEmail.length === 0 && modalErrorMessages.push(this.i18nManager.message('prelaunch.earlyAccessModal.error.email'));

        modalErrorMessages.length === 0 ? (

            /**
             * @todo Implement email sending
             * @body When a visitor clicks the form submitting button, an email should be sent.
             */
            this.setState({
                modalEmailSent: true
            })
        ) : (
            this.setState({
                modalError: true,
                modalErrorMessages
            }, () => 
            {
                console.log({ 
                    firstName: modalFirstName, 
                    lastName: modalLastName, 
                    email: modalEmail
                });
            })
        );
    }

    render()
    {
        const { 
            modalFirstName, 
            modalLastName, 
            modalEmail, 
            modalError, 
            modalErrorMessages,
            modalEmailSent
        } = this.state;

        return (
            <Modal
                trigger={<Button onClick={this.handleOpen.bind(this)}>{this.i18nManager.message('prelaunch.header.earlyAccessButton')}</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose.bind(this)}
                size="small"
                closeIcon
            >
                <Header 
                    icon="browser"
                    content={this.i18nManager.message('prelaunch.earlyAccessModal.window.header')}
                />
                <Modal.Content>
                    {modalEmailSent ? (
                        <div>
                            <Header as='h2'>
                                {this.i18nManager.message('prelaunch.earlyAccessModal.window.messageHeader')}
                            </Header>
                            <p>
                                {this.i18nManager.message('prelaunch.earlyAccessModal.window.messageContent')}
                            </p>
                        </div>
                    ) : (
                        <Form error>
                            <Form.Input
                                fluid
                                name="modalFirstName"
                                label={this.i18nManager.message('prelaunch.earlyAccessModal.window.firstName')}
                                placeholder={this.i18nManager.message('prelaunch.earlyAccessModal.window.firstName')}
                                onChange={this.handleInputChange.bind(this)}
                                value={modalFirstName}
                                required
                            />
                            <Form.Input
                                fluid
                                name="modalLastName"
                                label={this.i18nManager.message('prelaunch.earlyAccessModal.window.lastName')}
                                placeholder={this.i18nManager.message('prelaunch.earlyAccessModal.window.lastName')}
                                onChange={this.handleInputChange.bind(this)}
                                value={modalLastName}
                                required
                            />
                            <Form.Input
                                fluid
                                name="modalEmail"
                                label={this.i18nManager.message('prelaunch.earlyAccessModal.window.email')}
                                placeholder={this.i18nManager.message('prelaunch.earlyAccessModal.window.email')}
                                type="email"
                                onChange={this.handleInputChange.bind(this)}
                                value={modalEmail}
                                required
                            />
                            {modalError && (
                                <Message error>
                                    <Message.Header>{this.i18nManager.message('prelaunch.earlyAccessModal.error.header')}</Message.Header>
                                    <Message.List items={modalErrorMessages} />
                                </Message>
                            )}
                        </Form>
                    )}
                </Modal.Content>
                {!modalEmailSent && (
                    <Modal.Actions>
                        <Button
                            className="modalButton"
                            onClick={this.handleModal.bind(this)} 
                            inverted
                        >
                            {this.i18nManager.message('prelaunch.earlyAccessModal.window.button')}
                        </Button>
                    </Modal.Actions>
                )}
            </Modal>
        );
    }
}
