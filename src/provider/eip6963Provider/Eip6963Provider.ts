import { EIP6963AnnounceProviderEvent, EIP6963ProviderDetail, SupportedEip6963Provider } from "@carbon-sdk/constant"

class Eip6963Provider {
  private providers: EIP6963ProviderDetail[] = []

  constructor() {
    this.getProviders()
  }

  public getProvider(name: SupportedEip6963Provider) {
    return this.providers.find(p => p.info.name === name)
  }

  public getDefaultProvider() {
    return this.providers[0]
  }

  private getProviders() {
    let providers: EIP6963ProviderDetail[] = []

    function onAnnouncement(event: EIP6963AnnounceProviderEvent) {
      // Prevent adding a provider if it already exists in the list based on its uuid.
      if (providers.some(p => p.info.uuid === event.detail.info.uuid)) return
      providers = [...providers, event.detail]
    }

    window.addEventListener("eip6963:announceProvider", onAnnouncement);
    window.dispatchEvent(new Event("eip6963:requestProvider"));

    this.providers = providers
  }
}

export default Eip6963Provider
