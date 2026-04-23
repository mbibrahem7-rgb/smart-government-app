
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">الخدمات الحكومية الذكية</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              منصة إلكترونية متكاملة لتقديم الخدمات الحكومية الأردنية بكفاءة وسهولة
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link to="/assistant" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  المساعد الذكي
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">سياسة الخصوصية</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">الشروط والأحكام</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+962 6 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@gov.jo</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>عمان، الأردن</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} الخدمات الحكومية الذكية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
