// Footer.tsx
import { useLanguage } from "@/app/i18n/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative border-t border-primary/20 bg-background/50 backdrop-blur py-12 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">AI500</h4>
            <p className="text-muted-foreground text-sm">{t("footerTagline")}</p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">{t("quickLinks")}</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t("about")}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t("participants")}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">{t("resources")}</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t("documentation")}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t("tutorials")}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t("apiDocs")}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t("support")}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">{t("contact")}</h5>
            <p className="text-sm text-muted-foreground">
              {t("email")}: info@ai500.uz<br />
              {t("phone")}: +998 71 200 50 00
            </p>
          </div>
        </div>
        <div className="border-t border-primary/20 pt-8">
          <p className="text-center text-sm text-muted-foreground">{t("allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  )
}