import { LightningElement, api } from 'lwc';

export default class HateCrimeReportingCard extends LightningElement {
  @api imgSrc;
  @api headline;
  @api redirectTo;
  @api linkType; // New property to specify the link type (internal or external)

  handleHover() {
    this.template.querySelector('.card-container').classList.add('hovered');
  }

  handleMouseOut() {
    this.template.querySelector('.card-container').classList.remove('hovered');
  }

  redirectToUrl() {
    if (this.redirectTo) {
      if (this.linkType === 'internal') {
        // Redirect to internal page within the Experience site
        window.location.href = this.redirectTo;
      } else if (this.linkType === 'external') {
        // Open an external web page in a new tab
        window.open(this.redirectTo, '_blank');
      }
    }
  }
}
