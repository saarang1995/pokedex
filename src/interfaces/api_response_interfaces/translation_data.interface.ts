export default interface TranslationData {
  success: Success;
  contents: Contents;
}

interface Success {
  total: number;
}

interface Contents {
  translated: string;
  text: string;
  translation: string;
}
