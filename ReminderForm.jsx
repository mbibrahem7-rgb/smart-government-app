
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { pocketbaseClient as pb } from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { toast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const reminderTypes = [
  'رخصة قيادة',
  'جواز سفر',
  'شهادة ميلاد',
  'رخصة تجارية',
  'بطاقة هوية',
  'شهادة وفاة',
  'تسجيل عقار',
  'أخرى',
];

export default function ReminderForm({ open, onOpenChange, onSuccess }) {
  const { currentUser } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm({
    defaultValues: {
      reminderType: '',
      date: '',
      description: '',
    },
  });

  const reminderType = watch('reminderType');

  const onSubmit = async (data) => {
    if (!currentUser) {
      toast({
        variant: 'destructive',
        title: 'خطأ',
        description: 'يجب تسجيل الدخول أولاً',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await pb.collection('reminders').create({
        userId: currentUser.id,
        reminderType: data.reminderType,
        date: data.date,
        description: data.description,
        status: 'upcoming',
      }, { $autoCancel: false });

      toast({
        title: 'تم إضافة التذكير',
        description: 'سيتم تذكيرك في الموعد المحدد',
      });

      reset();
      onOpenChange(false);
      if (onSuccess) onSuccess();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'خطأ',
        description: error.message || 'حدث خطأ أثناء إضافة التذكير',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>إضافة تذكير جديد</DialogTitle>
          <DialogDescription>
            أضف تذكيراً لتجديد أو استخراج وثيقة حكومية
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reminderType">نوع التذكير *</Label>
            <Select
              value={reminderType}
              onValueChange={(value) => setValue('reminderType', value)}
            >
              <SelectTrigger id="reminderType">
                <SelectValue placeholder="اختر نوع التذكير" />
              </SelectTrigger>
              <SelectContent>
                {reminderTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.reminderType && (
              <p className="text-sm text-destructive">{errors.reminderType.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">التاريخ *</Label>
            <Input
              id="date"
              type="date"
              {...register('date', { required: 'التاريخ مطلوب' })}
              className="text-gray-900"
            />
            {errors.date && (
              <p className="text-sm text-destructive">{errors.date.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">ملاحظات</Label>
            <Textarea
              id="description"
              {...register('description')}
              placeholder="أضف أي ملاحظات إضافية..."
              rows={3}
              className="text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              إلغاء
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'جاري الحفظ...' : 'حفظ التذكير'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
