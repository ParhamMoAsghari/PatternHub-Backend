# الگوی مشاهده‌گر (Observer Pattern)

### همچنین شناخته شده به عنوان:
- Publish-Subscribe Pattern
- Dependents Pattern

### انگیزه (Motivation):
الگوی مشاهده‌گر در نرم‌افزارها استفاده می‌شود وقتی که بخواهیم وابستگی بین اشیاء را کاهش دهیم و تغییرات رخ داده در یک شیء را به صورت خودکار به شیء‌های دیگر منتقل کنیم. این الگو اجازه می‌دهد که یک شیء (Subject) تغییرات خود را به مجموعه‌ای از شیء‌ها (Observers) اعلام کند و آن‌ها به صورت خودکار واکنش نشان دهند.

### قابلیت‌استفاده (Applicability):
الگوی مشاهده‌گر وقتی مناسب است که:
- تغییر در یک شیء منجر به تغییرات مرتبط در دیگر شیء‌ها شود و نیاز به راه‌اندازی دستی این تغییرات نباشد.
- یک شیء نیاز دارد تا به صورت خودکار با تغییرات یک یا چند شیء دیگر همگام شود.
- یک شیء نیاز دارد که تغییرات خود را به چندین شیء دیگر منتقل کند بدون اطلاع از جزئیات آن‌ها.

### ساختار (Structure):
الگوی مشاهده‌گر شامل موارد زیر است:
- `Subject`: شیءی که تغییرات خود را اعلام می‌کند. این شیء شامل لیستی از شیء‌های Observer است و قابلیت اضافه کردن و حذف Observerها را دارد.
- `Observer`: شیءی که تغییرات Subject را مشاهده می‌کند و واکنش مناسب را نشان می‌دهد.
- `ConcreteSubject`: یک پیاده‌سازی خاص از Subject که تغییرات خود را اعلام می‌کند و Observerهایش را به‌روز می‌کند.
- `ConcreteObserver`: یک پیاده‌سازی خاص از Observer که تغییرات Subject را

مشاهده می‌کند و به آن واکنش نشان می‌دهد.

### شرکت‌کنندگان (Participants):
- `Subject`: شیءی که تغییرات خود را اعلام می‌کند.
- `Observer`: شیءی که تغییرات Subject را مشاهده می‌کند و واکنش مناسب را نشان می‌دهد.
- `ConcreteSubject`: پیاده‌سازی خاص از Subject که تغییرات خود را اعلام می‌کند و Observerهایش را به‌روز می‌کند.
- `ConcreteObserver`: پیاده‌سازی خاص از Observer که تغییرات Subject را مشاهده می‌کند و به آن واکنش نشان می‌دهد.

### همکاری (Collaborations):
- Observerها به Subject متصل می‌شوند و Subject را به‌روز می‌کنند وقتی که تغییرات رخ می‌دهد.
- Subject در هنگام تغییر، Observerها را به‌روز می‌کند و آن‌ها واکنش مناسب را نشان می‌دهند.

### پیامدها (Consequences):
استفاده از الگوی مشاهده‌گر دارای مزایا و معایب زیر است:
- **مزایا**:
    - جدا بودن Subject و Observerها از یکدیگر و امکان اضافه کردن و حذف Observerها به سادگی.
    - کاهش وابستگی بین Subject و Observerها.
    - امکان افزایش قابلیت اطمینان و توسعه‌پذیری برنامه.

- **معایب**:
    - Observerها ممکن است به صورت زیادی راه‌اندازی شوند و این موجب کاهش عملکرد شود.
    - ممکن است پیچیدگی بیشتری به طراحی برنامه اضافه شود.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی مشاهده‌گر را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Subject
public abstract class Subject
{
    private List<Observer> observers = new List<Observer>();

    public void Attach(Observer observer)
    {
        observers.Add(observer);
    }

    public void Detach(Observer observer)
    {
        observers.Remove(observer);
    }

    public void Notify()
    {
        foreach (Observer observer

 in observers)
        {
            observer.Update();
        }
    }
}

// ConcreteSubject
public class ConcreteSubject : Subject
{
    public string State { get; set; }
}

// Observer
public abstract class Observer
{
    protected ConcreteSubject subject;

    public Observer(ConcreteSubject subject)
    {
        this.subject = subject;
    }

    public abstract void Update();
}

// ConcreteObserver
public class ConcreteObserver : Observer
{
    public ConcreteObserver(ConcreteSubject subject) : base(subject)
    {
    }

    public override void Update()
    {
        Console.WriteLine("State changed: " + subject.State);
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
استفاده از الگوی مشاهده‌گر در بسیاری از سناریوها رخ می‌دهد. به عنوان مثال، آن را می‌توان در سیستم‌های رابط کاربری گرافیکی، ایمیل و سیستم‌های مبتنی بر رویداد استفاده کرد.

### الگوهای مرتبط (Related Patterns):
- **Mediator Pattern**: Mediator Pattern مشابه الگوی مشاهده‌گر است ولی به جای اینکه Observerها را به‌روز کند، درخواست‌ها و پاسخ‌ها را بین اجزای یک سیستم میانجی می‌کند.
- **Singleton Pattern**: Singleton Pattern و الگوی مشاهده‌گر می‌توانند در کنار هم استفاده شوند تا یک Subject یکتا برای Observerها فراهم کنند.