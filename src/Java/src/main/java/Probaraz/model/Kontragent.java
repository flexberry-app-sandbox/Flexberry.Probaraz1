package Probaraz.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probaraz.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Контрагент
 */
@Entity(name = "IISProbarazКонтрагент")
@Table(schema = "public", name = "Контрагент")
public class Kontragent {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодКонтрагента")
    private Integer кодконтрагента;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Лицо")
    private String лицо;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "Телефон")
    private String телефон;

    @Column(name = "Почта")
    private String почта;

    @Column(name = "ИНН")
    private Integer инн;


    public Kontragent() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодКонтрагента() {
      return кодконтрагента;
    }

    public void setКодКонтрагента(Integer кодконтрагента) {
      this.кодконтрагента = кодконтрагента;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public String getЛицо() {
      return лицо;
    }

    public void setЛицо(String лицо) {
      this.лицо = лицо;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public String getТелефон() {
      return телефон;
    }

    public void setТелефон(String телефон) {
      this.телефон = телефон;
    }

    public String getПочта() {
      return почта;
    }

    public void setПочта(String почта) {
      this.почта = почта;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }


}