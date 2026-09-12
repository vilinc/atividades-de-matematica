import React, { useState } from 'react';
import { X, CheckCircle, Download, FileText, QrCode } from 'lucide-react';
import { PRICING_DATA } from '../data';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('pix');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 400);
  };

  const handleDownloadSample = () => {
    // Generate a simple printable text/HTML content or trigger window.print
    const printableWindow = window.open('', '_blank');
    if (printableWindow) {
      printableWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Atividades de Matemática - Amostra para Impressão</title>
          <style>
            body { font-family: sans-serif; padding: 40px; color: #1f2937; }
            h1 { font-size: 24px; margin-bottom: 8px; }
            p { font-size: 14px; color: #4b5563; }
            .box { border: 2px dashed #9ca3af; padding: 24px; border-radius: 12px; margin-top: 24px; }
            .grid { display: flex; gap: 20px; margin-top: 16px; }
            .item { flex: 1; border: 1px solid #e5e7eb; padding: 16px; border-radius: 8px; text-align: center; }
          </style>
        </head>
        <body>
          <h1>Atividades de Matemática - Amostra Grátis</h1>
          <p>Caderno digital de exercícios em PDF pronto para imprimir (4 a 7 anos).</p>
          <div class="box">
            <h3>Atividade 01: Contagem e Associação</h3>
            <p>Conte quantos objetos existem em cada conjunto e escreva o numeral correspondente no círculo:</p>
            <div class="grid">
              <div class="item">🍎 🍎 🍎<br><br><strong>[ ___ ]</strong></div>
              <div class="item">⭐ ⭐ ⭐ ⭐ ⭐<br><br><strong>[ ___ ]</strong></div>
              <div class="item">🎈 🎈<br><br><strong>[ ___ ]</strong></div>
            </div>
          </div>
        </body>
        </html>
      `);
      printableWindow.document.close();
      printableWindow.focus();
    }
  };

  const handleResetAndClose = () => {
    setStep('form');
    setEmail('');
    setName('');
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div
      id="checkout-modal-backdrop"
      className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-[2px] flex items-center justify-center p-4"
      onClick={handleResetAndClose}
    >
      <div
        id="checkout-modal-dialog"
        className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-bold text-neutral-900">
              {step === 'form' ? 'Finalizar Pedido' : 'Pedido Confirmado!'}
            </span>
          </div>
          <button
            id="close-checkout-modal-btn"
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200/80 flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-500 font-medium">Produto</p>
                <p className="text-sm font-bold text-neutral-900">+60 Atividades de Matemática + 2 Bônus (PDF)</p>
              </div>
              <span className="text-base font-extrabold text-neutral-900">{PRICING_DATA.price}</span>
            </div>

            <div>
              <label htmlFor="customer-name" className="block text-xs font-semibold text-neutral-700 mb-1">
                Seu nome completo
              </label>
              <input
                id="customer-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Mariana Silva"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="customer-email" className="block text-xs font-semibold text-neutral-700 mb-1">
                E-mail para envio do arquivo PDF
              </label>
              <input
                id="customer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <p className="text-[11px] text-neutral-500 mt-1">
                O arquivo é enviado instantaneamente para este e-mail.
              </p>
            </div>

            <div>
              <span className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Forma de pagamento
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  id="pay-pix-btn"
                  onClick={() => setPaymentMethod('pix')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border flex items-center justify-center gap-1.5 transition-colors ${
                    paymentMethod === 'pix'
                      ? 'bg-sky-50 border-sky-300 text-sky-800'
                      : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>PIX (Acesso Imediato)</span>
                </button>
                <button
                  type="button"
                  id="pay-card-btn"
                  onClick={() => setPaymentMethod('cartao')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border flex items-center justify-center gap-1.5 transition-colors ${
                    paymentMethod === 'cartao'
                      ? 'bg-sky-50 border-sky-300 text-sky-800'
                      : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  <span>Cartão de Crédito</span>
                </button>
              </div>
            </div>

            <button
              id="confirm-checkout-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3 px-4 text-sm font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 transition-colors shadow-sm disabled:opacity-50"
            >
              {isSubmitting ? 'Processando...' : `Confirmar e Pagar ${PRICING_DATA.price}`}
            </button>
          </form>
        ) : (
          <div className="p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>

            <div>
              <h4 className="text-lg font-bold text-neutral-900">
                Obrigado, {name}!
              </h4>
              <p className="text-sm text-neutral-600 mt-1">
                Enviamos o link de download do caderno em PDF para:
              </p>
              <p className="text-sm font-semibold text-neutral-800 mt-0.5 bg-neutral-100 py-1 px-2 rounded inline-block">
                {email}
              </p>
            </div>

            <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 text-xs text-sky-800 text-left space-y-1">
              <p className="font-semibold">Informações do arquivo:</p>
              <p>• Formato: PDF de alta resolução (tamanho A4)</p>
              <p>• Conteúdo: +60 páginas de exercícios + gabarito + 2 bônus exclusivos</p>
              <p>• Sem expiração: baixe e imprima quando quiser</p>
            </div>

            <button
              id="download-sample-btn"
              type="button"
              onClick={handleDownloadSample}
              className="w-full py-2.5 px-4 text-sm font-semibold text-neutral-800 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-neutral-600" />
              <span>Visualizar / Imprimir Amostra</span>
            </button>

            <button
              id="finish-modal-btn"
              type="button"
              onClick={handleResetAndClose}
              className="w-full py-2.5 px-4 text-xs font-medium text-neutral-500 hover:text-neutral-700"
            >
              Fechar janela
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
