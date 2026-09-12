import { Mail } from 'lucide-react';

export default function Rodape() {
  return (
    <footer id="footer-section" className="py-10 bg-white text-center text-xs text-neutral-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-neutral-600 mb-3">
          <span className="font-semibold text-neutral-800">
            Atividades de Matemática
          </span>
          <span className="hidden sm:inline text-neutral-300">•</span>
          <a
            id="contact-email-link"
            href="mailto:contato@atividadesdematematica.com.br"
            className="inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-neutral-400" />
            <span>contato@atividadesdematematica.com.br</span>
          </a>
        </div>

        <p id="copyright-text" className="text-neutral-400">
          © {new Date().getFullYear()} Atividades de Matemática. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
