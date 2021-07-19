import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'et-register-cc',
  styleUrl: 'et-register-cc.css',
  shadow: true,
})
export class EtRegisterCc {
  /**
   * Language
   */
  @Prop() language: string;

  // States
  @State() familyName: string;
  @State() givenName: string;
  @State() mail: string;
  @State() privacy: boolean;
  @State() error: boolean = false;
  @State() errorStatus: number;
  @State() success: boolean = false;

  // Submit form and fetch api
  handleSubmit(e) {
    e.preventDefault()
    const opts = {
      email: this.mail,
      givenName: this.givenName,
      familyName: this.familyName,
      privacyPolicy: this.privacy,
      language: this.language
    }

    fetch('https://api.espresso-tutorials.com/auth/register/customer-account', {
      method: 'post',
      body: JSON.stringify(opts),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
     if (!response.ok && response.status !== 200) {
       this.error = true;
       this.errorStatus = response.status;
     } else {
       this.success = true;
     }
    })
    .catch(() => {
      this.error = true;
      this.errorStatus = 500;
    });
  }

  // Show form error
  showFormError() {
    let message = '';
    if (this.language === 'de') {
      if (this.errorStatus === 403) {
        message = 'Ihre Domain ist nicht freigeschalten. Bitte wenden Sie sich an Ihren Administrator.';
      } else if (this.errorStatus === 422) {
        message = '>Bitte überprüfen Sie ihre Angaben und versuchen Sie es erneut.';
      } else {
        message = 'Es ist ein Fehler aufgetreten. Bitten wenden Sie sich an Ihren Administrator.';
      }
      return <div>Fehler: {message}</div>
    } else {
      if (this.errorStatus === 403) {
        message = 'Your domain is not unlocked. Please contact your administrator.';
      } else if (this.errorStatus === 422) {
        message = 'Please check your information and try again.';
      } else {
        message = 'An error has occurred. Please contact your administrator.';
      }
      return <div>Error: {message}</div>
    }
  }

  // Show form success {
  showFormSuccess() {
    let message = '';
    if (this.language === 'de') {
      message = 'Ihr Account wurde erfolgreich angelegt. In Kürze erhalten Sie eine E-Mail zum Anlegen Ihres Passwort.';
      return <div>{message}</div>
    } else {
      message = 'Your account has been successfully created. Shortly you will receive an email to create your password.';
      return <div>{message}</div>
    }
  }

  /*
  * Handle input changes and update state
  */
  handleFamilyNameChange(event) {
    this.familyName = event.target.value;
  }

  handleGivenNameChange(event) {
    this.givenName = event.target.value;
  }

  handleMailChange(event) {
    this.mail = event.target.value;
  }

  handlePrivacyChange(event) {
    this.privacy = event.target.checked;
  }

  // Display translation based on language attribute
  getTranslation(element: string) {
    let translations = {
      givenName: 'Given Name',
      familyName: 'Family Name',
      mail: 'Company mail address',
      privacy: 'Privacy Policy',
      submit: 'Create account',
      error: 'Error: Please check your entries and try again.',
      privacyMessage: 'By creating your account you confirm our terms of use and privacy policy.'
    };
    if (this.language === 'de') {
      translations = {
        givenName: 'Vorname',
        familyName: 'Name',
        mail: 'Firmen E-Mail Adresse',
        privacy: 'Datenschutz',
        submit: 'Zugang erstellen',
        error: 'Fehler: Bitte überprüfen Sie ihre Angaben und versuchen Sie es erneut.',
        privacyMessage: 'Mit dem Anlegen Ihres Zugangs stimmen Sie unseren Allgemeinen Geschäftsbedingungen und Datenschutzbestimmungen zu.'
      }
    }

    if (element === 'familyName') {
      return translations.familyName;
    }
    if (element === 'givenName') {
      return translations.givenName;
    }
    if (element === 'mail') {
      return translations.mail;
    }
    if (element === 'privacy') {
      return translations.privacy;
    }
    if (element === 'submit') {
      return translations.submit;
    }
    if (element === 'privacyMessage') {
      return translations.privacyMessage;
    }
  }

  // Render component
  render() {
    return (
      <Host>
        <form onSubmit={(e) => this.handleSubmit(e)} class={"font-family"}>
          <div class={"w-full mb-2"}>
            <label class={"block font-semibold mb-2 text-sm text-gray-700"} htmlFor="givenName">
              {this.getTranslation('givenName')}<sup class={"text-red-500"}>*</sup>
            </label>
            <input id="givenName" type="text" value={this.givenName} onInput={(event) => this.handleGivenNameChange(event)} class={"appearance-none block w-full bg-gray-200 border border-solid border-gray-600 text-gray-700 font-light rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-gray-400 placeholder-gray-600"} required />
          </div>
          <div class={"w-full mb-2"}>
            <label class={"block font-semibold mb-2 text-sm text-gray-700"} htmlFor="familyName">
              {this.getTranslation('familyName')}<sup class={"text-red-500"}>*</sup>
            </label>
            <input id="familyName" type="text" value={this.familyName} onInput={(event) => this.handleFamilyNameChange(event)} class={"appearance-none block w-full bg-gray-200 border border-solid border-gray-600 text-gray-700 font-light rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-gray-400 placeholder-gray-600"} required />
          </div>
          <div class={"w-full mb-2"}>
            <label class={"block font-semibold mb-2 text-sm text-gray-700"} htmlFor="email">
              {this.getTranslation('mail')}<sup class={"text-red-500"}>*</sup>
            </label>
            <input id="email" type="email" value={this.mail} onInput={(event) => this.handleMailChange(event)} class={"appearance-none block w-full bg-gray-200 border border-solid border-gray-600 text-gray-700 font-light rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-gray-400 placeholder-gray-600"} required />
          </div>
          <div class={'w-full mb-2 flex items-start'}>
            <div class={"flex h-5"}>
              <input id="privacy" type="checkbox" onInput={(event) => this.handlePrivacyChange(event)} required />
            </div>
            <div class={"ml-2 text-sm"}>
              <label htmlFor="privacy" class={'flex flex-row items-center text-gray-700 font-semibold cursor-pointer'}>
                {this.getTranslation('privacy')}<sup class={"text-red-500"}>*</sup>
              </label>
              <p class={"text-gray-600 leading-tight mt-0"}>
                {this.getTranslation('privacyMessage')}
              </p>
            </div>
          </div>
          <div class={this.error ? 'block w-full rounded-md p-4 bg-red-500 text-white font-semibold text-sm my-2' : "hidden"}>
            {this.showFormError()}
          </div>
          <div class={this.success ? 'block w-full rounded-md p-4 bg-green-500 text-white font-semibold text-sm my-2' : "hidden"}>
            {this.showFormSuccess()}
          </div>
          <div class={"w-full"}>
            <input class={'appearance-none border-none cursor-pointer w-full text-center text-sm bg-key-500 hover:bg-key-600 text-white py-3 px-8 rounded-md mb-2'} type="submit" value={this.getTranslation('submit')} />
          </div>
        </form>
      </Host>
    );
  }

}
