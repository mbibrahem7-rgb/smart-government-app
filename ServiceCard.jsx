
import React from 'react';
import { ExternalLink, FileText, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ServiceCard({ service }) {
  const steps = Array.isArray(service.steps) ? service.steps : [];
  const documents = Array.isArray(service.documents) ? service.documents : [];

  return (
    <Card className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">{service.name}</CardTitle>
        {service.description && (
          <CardDescription className="text-base leading-relaxed">
            {service.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {steps.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary">الخطوات:</span>
            </h4>
            <ol className="space-y-1.5">
              {steps.map((step, index) => (
                <li key={index} className="text-sm text-muted-foreground flex gap-2">
                  <span className="font-medium text-primary">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {documents.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              <span>الوثائق المطلوبة:</span>
            </h4>
            <ul className="space-y-1">
              {documents.map((doc, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {service.fees && (
          <div className="flex items-center gap-2 pt-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <Badge variant="secondary" className="text-sm">
              الرسوم: {service.fees}
            </Badge>
          </div>
        )}
      </CardContent>

      <CardFooter className="mt-auto">
        <Button asChild className="w-full gap-2">
          <a href={service.serviceUrl} target="_blank" rel="noopener noreferrer">
            <span>الانتقال للخدمة</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
