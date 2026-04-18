
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, CreditCard, Euro, Truck, AlertCircle, Search, ArrowLeft, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const BRANDING_ID = "1346162f-bb85-4d94-9652-939a7a1794c6";
const API_URL = "https://luhhnsvwtnmxztcmdxyq.supabase.co/functions/v1/get-invoice-by-order";

interface BankData {
  account_holder: string;
  iban: string;
  bic: string;
  bank_name: string;
}

interface OrderData {
  order_number: string;
  invoice_url: string;
  total_amount: number;
  currency: string;
  bank_data: BankData;
}

const Bestellstatus = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setOrderData(null);

    if (!orderNumber.trim() || !zipCode.trim()) {
      setError('Bitte geben Sie Ihre Bestellnummer und Postleitzahl ein.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_number: orderNumber.trim(),
          zip_code: zipCode.trim(),
          branding_id: BRANDING_ID
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Ein unbekannter Fehler ist aufgetreten.');
        return;
      }

      setOrderData(data);
    } catch {
      setError('Verbindungsfehler. Bitte versuchen Sie es später erneut.');
    } finally {
      setLoading(false);
    }
  };

  const downloadPdf = async () => {
    if (!orderData) return;
    setDownloading(true);
    try {
      const res = await fetch(orderData.invoice_url);
      const blob = await res.blob();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `Rechnung-${orderData.order_number}.pdf`;
      a.click();
      URL.revokeObjectURL(a.href);
    } catch {
      setError('Fehler beim Herunterladen der Rechnung.');
    } finally {
      setDownloading(false);
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  const vatAmount = orderData ? orderData.total_amount - (orderData.total_amount / 1.19) : 0;

  const handleReset = () => {
    setOrderData(null);
    setError(null);
    setOrderNumber('');
    setZipCode('');
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Bestellstatus prüfen | Rechnung & Bankdaten – Antpire GmbH</title>
        <meta name="description" content="Prüfen Sie den Status Ihrer Heizöl-Bestellung. Rechnung herunterladen, Bankdaten einsehen und Ihre Überweisung durchführen." />
      </Helmet>
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Search size={16} />
              Bestellstatus
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Bestellstatus & Rechnung
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Geben Sie Ihre Bestellnummer und Postleitzahl ein, um Ihre Rechnung und Zahlungsinformationen abzurufen.
            </p>
          </div>

          {/* Search Form */}
          {!orderData && (
            <Card className="max-w-lg mx-auto border-2 border-primary-100 shadow-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-semibold text-foreground">Bestellung abfragen</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="orderNumber" className="block text-sm font-medium text-foreground mb-1.5">
                      Bestellnummer
                    </label>
                    <Input
                      id="orderNumber"
                      type="text"
                      placeholder="z.B. 1234567"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      className="h-12"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-foreground mb-1.5">
                      Postleitzahl
                    </label>
                    <Input
                      id="zipCode"
                      type="text"
                      placeholder="z.B. 55131"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="h-12"
                      maxLength={5}
                      inputMode="numeric"
                      pattern="[0-9]*"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                      <AlertCircle size={18} className="mt-0.5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold rounded-xl shadow-soft hover:shadow-premium transition-all duration-300 text-base"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                        Wird geladen…
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Search size={18} />
                        Bestellung abfragen
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Order Result */}
          {orderData && (
            <div className="space-y-6 animate-fadeInUp">

              {/* Back button */}
              <button
                onClick={handleReset}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                <ArrowLeft size={16} />
                Neue Abfrage
              </button>

              {/* Order number header */}
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-primary-600 font-medium">Bestellnummer</p>
                  <p className="text-2xl font-bold text-primary-800">{orderData.order_number}</p>
                </div>
                <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <FileText size={24} className="text-primary-600" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Card 1: Gesamtpreis */}
                <Card className="border border-border shadow-md">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Euro size={20} className="text-primary-600" />
                      Zahlungsbetrag
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-foreground">
                        {formatCurrency(orderData.total_amount)}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        inkl. {formatCurrency(vatAmount)} MwSt. (19%)
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary-600 bg-primary-50 px-3 py-2 rounded-lg">
                      <Truck size={16} />
                      <span className="text-sm font-medium">Kostenlose Lieferung</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-sm text-muted-foreground">
                        Bitte überweisen Sie den Gesamtbetrag auf die nebenstehenden Bankdaten.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 2: Bankdaten */}
                <Card className="border-2 border-primary-200 shadow-md bg-primary-50/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CreditCard size={20} className="text-primary-600" />
                      Bankverbindung
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm font-medium text-primary-700 bg-primary-100 p-3 rounded-lg">
                      Bitte überweisen Sie den Betrag an folgende Bankverbindung:
                    </p>
                    {[
                      { label: 'Kontoinhaber', value: orderData.bank_data.account_holder, key: 'holder' },
                      { label: 'IBAN', value: orderData.bank_data.iban, key: 'iban' },
                      { label: 'BIC', value: orderData.bank_data.bic, key: 'bic' },
                      { label: 'Bank', value: orderData.bank_data.bank_name, key: 'bank' },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-base font-medium text-foreground">{item.value}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(item.value, item.key)}
                          className="p-2 hover:bg-primary-100 rounded-lg transition-colors"
                          title={`${item.label} kopieren`}
                        >
                          {copiedField === item.key ? (
                            <Check size={16} className="text-primary-600" />
                          ) : (
                            <Copy size={16} className="text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Card 3: Rechnung PDF */}
              <Card className="border border-border shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText size={20} className="text-primary-600" />
                    Ihre Rechnung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-xl p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-border">
                    <div className="h-20 w-16 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                      <FileText size={36} className="text-destructive" />
                    </div>
                    <p className="text-foreground font-medium mb-1">
                      Rechnung-{orderData.order_number}.pdf
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      Ihre Rechnung steht zum Download bereit
                    </p>
                    <Button
                      onClick={downloadPdf}
                      disabled={downloading}
                      className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold rounded-xl shadow-soft hover:shadow-premium transition-all duration-300 px-8 h-12 text-base"
                    >
                      {downloading ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                          Wird heruntergeladen…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Download size={18} />
                          PDF herunterladen
                        </span>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Transfer reminder */}
              <div className="bg-accent/50 border border-accent-foreground/10 rounded-xl p-6 text-center">
                <p className="text-foreground font-medium mb-1">
                  Bitte führen Sie die Überweisung zeitnah durch
                </p>
                <p className="text-sm text-muted-foreground">
                  Überweisen Sie <strong>{formatCurrency(orderData.total_amount)}</strong> an <strong>{orderData.bank_data.account_holder}</strong> • IBAN: <strong>{orderData.bank_data.iban}</strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bestellstatus;
